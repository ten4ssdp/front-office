import React, { useContext, useEffect } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import useForm from 'hooks/useForm';
import { MainStore } from 'store/MainStore';
import { setIdToEdit, refreshApp } from 'action/mainAction';
import { toggleModal } from '../../../action/mainAction';
import { message } from 'antd';
import SelectArea from 'components/SelectArea';
import { HotelFromDB } from 'interface/hotel';

const INITIAL_STATE = {
  name: '',
  address: '',
  postalCode: '',
  city: '',
  availableRooms: 0
};

export default function HotelForm() {
  const { state, dispatch } = useContext(MainStore);

  const [values, handleChange, setValues] = useForm(INITIAL_STATE);

  const body = {
    name: values.name,
    address: values.address,
    zipCode: values.postalCode,
    city: values.city,
    roomCount: values.availableRooms,
    sectorId: state.areaSelected
  };

  useEffect(() => {
    setValues(INITIAL_STATE);
  }, [state.idToEdit]);

  if (state.idToEdit !== '' && values.name === '') {
    const editableHotel = state.hostels.find(
      (hostel: HotelFromDB) => hostel.id === state.idToEdit
    );

    setValues({
      name: editableHotel.name,
      address: editableHotel.address,
      postalCode: editableHotel.zipCode,
      city: editableHotel.city,
      availableRooms: editableHotel.roomCount
    });
  }

  const handleSubmit = (type: string) => async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let hostel;
    try {
      if (type === 'edit') {
        const editableHotel = state.hostels.find(
          (hostel: HotelFromDB) => hostel.id === state.idToEdit
        );

        const newbody = {
          ...body,
          sectorId: +editableHotel?.sectorId
        };

        hostel = await fetch(
          `http://localhost:5000/api/hotel/${state.idToEdit}`,
          {
            method: 'PUT',
            body: JSON.stringify(newbody),
            headers: {
              'content-type': 'application/json'
            }
          }
        );
      }

      if (type === 'post') {
        hostel = await fetch('http://localhost:5000/api/hotel', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json'
          }
        });
      }

      await setIdToEdit(dispatch, '');
      await setValues(INITIAL_STATE);
      await refreshApp(dispatch, true);
      await toggleModal(dispatch, false);
      await message.success("L'opération à bien été réalisé");
    } catch (error) {
      await message.error("Une erreur s'est produite mlors de cette opération");
    }
  };

  return (
    <form onSubmit={handleSubmit(state.idToEdit ? 'edit' : 'post')}>
      <fieldset className="fielset">
        <label htmlFor="hotelName">
          Nom de l&apos;hôtel
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            id="hotelName"
            value={values.name}
          />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="address">
          Adresse
          <Input
            onChange={handleChange}
            id="address"
            type="text"
            name="address"
            allowClear
            value={values.address}
          />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="postalCode">
          Code postal
          <Input
            onChange={handleChange}
            id="postalCode"
            type="text"
            name="postalCode"
            allowClear
            value={values.postalCode}
          />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="city">
          Ville
          <Input
            onChange={handleChange}
            id="city"
            type="text"
            name="city"
            allowClear
            value={values.city}
          />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="availableRooms">
          Nombre de chambres
          <Input
            onChange={handleChange}
            id="availableRooms"
            type="text"
            name="availableRooms"
            allowClear
            value={values.availableRooms}
          />
        </label>
      </fieldset>
      {!state.idToEdit && <SelectArea />}
      <Button htmlType="submit">
        {state.idToEdit ? 'Modifier' : 'Ajouter'}
      </Button>
    </form>
  );
}
