import React, { useContext, useEffect } from 'react';
import { Input, Button, message } from 'antd';
import useForm from 'hooks/useForm';
import { MainStore } from 'store/MainStore';
import { setIdToEdit, refreshApp, toggleModal } from 'action/mainAction';
import { CarFromDB } from 'interface/car';
import crud from 'utils/crud';

const INITIAL_STATE = {
  carId: '',
  model: ''
};

export default function CarForm() {
  const { state, dispatch } = useContext(MainStore);

  const [values, handleChange, setValues] = useForm(INITIAL_STATE);
  const body = {
    numberPlate: values.carId,
    type: values.model,
    parkingId: 1
  };

  useEffect(() => {
    setValues(INITIAL_STATE);
  }, [state.idToEdit]);

  if (state.idToEdit !== '' && values.carId === '') {
    const editableCar = state.cars.find(
      (car: CarFromDB) => car.id === state.idToEdit
    );

    setValues({
      carId: editableCar?.numberPlate,
      model: editableCar?.type
    });
  }

  const handleSubmit = (type: string) => async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    let status;
    try {
      if (type === 'edit') {
        status = await crud.handleUpdate('vehicle', state.idToEdit, body);
      }

      if (type === 'post') {
        status = await crud.handlePost('vehicle', body);
      }

      if (status === 200) {
        await setIdToEdit(dispatch, '');
        await setValues(INITIAL_STATE);
        await refreshApp(dispatch, true);
        await toggleModal(dispatch, false);
        await message.success("L'opération à bien été réalisé");
      } else {
        throw new Error();
      }
    } catch (error) {
      await message.error("Une erreur s'est produite mlors de cette opération");
    }
  };

  return (
    <form onSubmit={handleSubmit(state.idToEdit ? 'edit' : 'post')}>
      <fieldset className="fielset">
        <label htmlFor="carId">
          Immatriculation
          <Input
            type="text"
            name="carId"
            id="carId"
            allowClear
            onChange={handleChange}
            value={values.carId}
          />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="carModel">
          Modèle
          <Input
            type="text"
            name="model"
            id="carModel"
            allowClear
            onChange={handleChange}
            value={values.model}
          />
        </label>
      </fieldset>
      <Button htmlType="submit">
        {state.idToEdit ? 'Modifier' : 'Ajouter'}
      </Button>
    </form>
  );
}
