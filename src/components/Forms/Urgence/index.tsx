import React, { useContext, useEffect, useState } from 'react';
import { AutoComplete, Button, message } from 'antd';
import { HotelFromDB } from 'interface/hotel';
import { MainStore } from 'store/MainStore';
import { setHostelsDatasToStore, toggleModal } from 'action/mainAction';
import useFetch from 'hooks/useFetch';
import { BASE_URL } from 'utils/constant';
import deburr from 'lodash.deburr';
import debounce from 'lodash.debounce';
import TextArea from 'antd/lib/input/TextArea';
import crud from 'utils/crud';

export default function UrgenceForm({
  date,
  teamId
}: {
  date: string;
  teamId: number;
}) {
  const { state, dispatch } = useContext(MainStore);
  const { isloading, datas } = useFetch(`${BASE_URL}/hotels`);
  const [options, setOptions] = useState<any>([]);
  const [id, setId] = useState<any>(null);
  const [address, setAddress] = useState<HotelFromDB | undefined>();
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if ((!isloading && state.hostels.length <= 0) || state.refresh)
      setHostelsDatasToStore(dispatch, datas);
  }, [isloading, state.hostels, state.refresh]);

  const handleSearch = debounce((inputValue: string) => {
    setOptions(() => {
      const deburredInputValue = deburr(inputValue);
      const deburredHostelNames = state.hostels.map((h: HotelFromDB) => ({
        name: deburr(h.name),
        id: h.id
      }));
      return deburredHostelNames.filter((h: HotelFromDB) =>
        h.name.toLowerCase().includes(deburredInputValue)
      );
    });
  }, 700);

  const handleChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === null) {
      return;
    }
    const body = {
      hotelId: id,
      date,
      teamId,
      isUrgent: true,
      rate: 0,
      description
    };

    try {
      await crud.handlePost('visit', body);
      await toggleModal(dispatch, false);
      await message.success("L'opération à bien été réalisé");
      setOptions([]);
      setId(null);
      setAddress(undefined);
      setDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  const onSelect = (data: any) => {
    setId(data);
    setAddress(() => {
      const foundHotel: HotelFromDB = state.hostels.find(
        (h: HotelFromDB) => h.id.toString() === data
      );
      return foundHotel;
    });
  };

  const { Option } = AutoComplete;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fielset">
        <label htmlFor="hotelId">Nom de l'hotel</label>
        <AutoComplete onSearch={handleSearch} onSelect={onSelect}>
          {options.length > 0 &&
            options.map((o: { name: string; id: number }) => (
              <Option key={o?.id} value={o?.id.toString()}>
                {o?.name}
              </Option>
            ))}
        </AutoComplete>
      </fieldset>
      {address && (
        <fieldset className="fielset">
          <label htmlFor="address">Adresse: </label>
          <br />
          <span>{address?.address}</span>
          <br />
          <span>{address?.zipCode}</span>
          <br />
          <span>{address?.city}</span>
        </fieldset>
      )}
      <fieldset className="fielset">
        <label htmlFor="description">Description: </label>
        <TextArea value={description} onChange={handleChange} />
      </fieldset>
      <Button htmlType="submit">Ajouter</Button>
    </form>
  );
}
