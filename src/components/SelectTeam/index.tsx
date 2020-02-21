import React, { useContext, useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import {
  setTeamIdToStore,
  setVisitToStore,
  setSectorAndTeam
} from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import moment from 'moment';
import useFetch from 'hooks/useFetch';
import Cookies from 'js-cookie';
import { BASE_URL } from 'utils/constant';

const { Option } = Select;

export default function SelectTeam() {
  const [id, setId] = useState('');

  const { dispatch } = useContext(MainStore);

  const { datas, isloading } = useFetch(
    `${BASE_URL}/mickey/teams/${moment()
      .add(7, 'days')
      .format('MM-DD-YYYY')}`
  );

  useEffect(() => {
    setSectorAndTeam(dispatch, datas);
  }, [isloading]);

  useEffect(() => {
    async function getDatas() {
      const res = await fetch(
        `${BASE_URL}/mickey/visits/${id}/${moment()
          .add(7, 'days')
          .format('MM-DD-YYYY')}`,
        {
          headers: {
            'content-type': 'application/json',
            authorization: `bearer: ${Cookies.get('token')}`
          }
        }
      );

      const resJson = await res.json();
      setVisitToStore(dispatch, resJson);
    }
    getDatas();
  }, [id]);

  function onChange(value: string) {
    setId(value);
    setTeamIdToStore(dispatch, value);
  }

  return (
    <Select
      style={{ width: '90%', marginTop: '10%' }}
      placeholder="Choisir une équipe"
      onChange={onChange}
    >
      {datas.map((d: any) => (
        <Option key={d?.id} value={d?.id}>
          {d?.name}
        </Option>
      ))}
    </Select>
  );
}
