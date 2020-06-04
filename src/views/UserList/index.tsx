import React, { useContext, useEffect, useState } from 'react';
import { PageHeader } from 'antd';

import List from 'components/List';
import { MainStore } from 'store/MainStore';
import { setIdDetailToShow } from 'action/mainAction';
import { ColumnsInterface } from 'interface/listInterface';
import useFetch from 'hooks/useFetch';
import DetailUser from 'components/Detail/DetailUser';
import { BASE_URL } from 'utils/constant';

const columns: ColumnsInterface[] = [
  {
    title: 'Nom',
    dataIndex: 'lastname'
  },
  {
    title: 'Lastname',
    dataIndex: 'firstname'
  },
  {
    title: 'Secteur',
    dataIndex: 'area'
  },
  {
    title: 'Role',
    dataIndex: 'role'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <p
        style={{
          color: '#006BB4',
          marginTop: '10%',
          fontWeight: 600,
          cursor: 'pointer'
        }}
        onClick={() => setIdDetailToShow(record.dispatch, record?.key)}
      >
        Voir détail
      </p>
    )
  }
];

function UserList(): JSX.Element {
  const [users, setUsers] = useState<any | []>([]);
  const [user, setUser] = useState<any>(null);
  const { dispatch, state } = useContext(MainStore);

  const { datas, isloading }: any = useFetch(`${BASE_URL}/user`);

  useEffect(() => {
    if (datas.length > 0) {
      const arr = datas?.map((d: any) => ({
        key: d?.id,
        lastname: d?.lastname,
        firstname: d?.name,
        area: d?.sector?.name,
        role: d?.role?.name,
        dispatch
      }));
      setUsers(arr);
    }
  }, [isloading]);

  useEffect(() => {
    const employee = datas?.find((d: any) => d.id === state.idDetailToShow);
    setUser(employee);
  }, [state.idDetailToShow]);

  return (
    <div className="UserList">
      <PageHeader
        title="Liste des intervenants"
        subTitle="Île de France"
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List columns={columns} data={users} />
      {user && <DetailUser user={user} />}
    </div>
  );
}

export default UserList;
