import React, { useContext, useState, useEffect } from 'react';
import { Input } from 'antd';
import { MainStore } from 'store/MainStore';
import { HotelFromDB } from 'interface/hotel';
import { setHostelsDatasToStore } from 'action/mainAction';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const { state, dispatch } = useContext(MainStore);

  const filteredHostel = state?.hostels.filter((h: HotelFromDB) => {
    return h.name.indexOf(search) >= 0;
  });

  useEffect(() => {
    setHostelsDatasToStore(dispatch, filteredHostel);
  }, [search]);

  return (
    <Input.Search
      placeholder="Rechercher un hôtel"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
      }
    />
  );
}
