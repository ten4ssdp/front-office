import React, { useContext, useEffect, useState } from 'react';
import { Button, PageHeader } from 'antd';

import List from 'components/List';
import {
  HotelsDatasInterface,
  ColumnsInterface
} from '../../interface/listInterface';
import ModalForm from 'components/Modal/ModalForm';
import HotelForm from 'components/Forms/Hotel';
import { MainStore } from 'store/MainStore';
import { toggleModal, setHostelsDatasToStore } from 'action/mainAction';
import Action from 'components/Action';
import useFetch from 'hooks/useFetch';
import moment from 'moment';
import DetailHotel from 'components/Detail/DetailHotel';
import { HotelFromDB } from 'interface/hotel';

const columns: ColumnsInterface[] = [
  {
    title: 'Hôtels',
    dataIndex: 'hotel'
  },
  {
    title: 'Date de visite',
    dataIndex: 'visite'
  },
  {
    title: 'Note',
    dataIndex: 'rate'
  },
  {
    title: 'Secteur',
    dataIndex: 'area'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <Action
        wording="Êtes-vous sur de vouloir supprimer cette hôtel ?"
        record={record}
        endpoint="hotel"
        showDetail={true}
      />
    )
  }
];

function Hostels(): JSX.Element {
  const [hotelsDatas, setHotelsData] = useState<HotelsDatasInterface[] | []>(
    []
  );
  const [hotel, setHotel] = useState<HotelFromDB | null>(null);

  const { dispatch, state } = useContext(MainStore);

  const { isloading, datas } = useFetch('http://localhost:5000/api/hotels');
  useEffect(() => {
    !isloading && setHostelsDatasToStore(dispatch, datas);
    const arr: HotelsDatasInterface[] = datas.map((d: HotelFromDB) => ({
      key: d.id,
      hotel: d.name,
      area: d?.sector?.name,
      visite: d?.visits?.[0]?.date
        ? moment(d?.visits[0]?.date).format('DD/MM/YYYY')
        : 'Pas de Date',
      rate: d?.visits?.[0]?.rate ? d?.visits?.[0]?.rate : 'Pas de note'
    }));
    setHotelsData(arr);
  }, [isloading]);

  useEffect(() => {
    const hotel = state.hostels.find(
      (hostel: HotelFromDB) => hostel.id === state.idDetailToShow
    );
    setHotel(hotel);
  }, [state.idDetailToShow]);

  return (
    <div style={{ height: '100%' }}>
      <PageHeader
        title="Liste des hôtels"
        subTitle="Île de France"
        footer={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un hôtel
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List loading={isloading} columns={columns} data={hotelsDatas} />
      <ModalForm title="Ajouter un hôtel">
        <HotelForm />
      </ModalForm>
      {hotel && <DetailHotel hotel={hotel} />}
    </div>
  );
}

export default Hostels;
