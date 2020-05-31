import React, { useContext, useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import {
  setTeamIdToStore,
  setVisitToStore,
  setSectorAndTeam
} from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import useFetch from 'hooks/useFetch';
import Cookies from 'js-cookie';
import { BASE_URL } from 'utils/constant';

const { Option } = Select;

export default function SelectTeam() {
  const [id, setId] = useState('');

  const { state, dispatch } = useContext(MainStore);
  const { selectedWeekFirstDay } = state;

  const {
    datas,
    isloading
  } = useFetch(`${BASE_URL}/mickey/teams/${selectedWeekFirstDay}`, [
    selectedWeekFirstDay
  ]);

  useEffect(() => {
    setSectorAndTeam(dispatch, datas);
  }, [isloading]);

  useEffect(() => {
    async function getDatas() {
      const res = await fetch(
        `${BASE_URL}/mickey/visits/${id}/${selectedWeekFirstDay}`,
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
    !!id && getDatas();
  }, [id, selectedWeekFirstDay]);

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
