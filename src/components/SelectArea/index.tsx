import React, { useContext, useEffect } from 'react';
import { Select } from 'antd';
import { MainStore } from 'store/MainStore';
import { selectArea } from 'action/mainAction';

const { Option } = Select;

interface Props {
  id?: string;
}

export default function SelectArea(props: Props) {
  const {
    dispatch,
    state: { areaSelected }
  } = useContext(MainStore);

  const handleChange = (value: string) => {
    selectArea(dispatch, value);
  };

  return (
    <div>
      <Select
        id={props.id}
        style={{ width: 120, marginBottom: ' 3%' }}
        onChange={handleChange}
        placeholder="75"
        value={areaSelected ? areaSelected : ''}
      >
        <Option value="1">75</Option>
        <Option value="2">93</Option>
        <Option value="3">92-94</Option>
        <Option value="4">77-91</Option>
        <Option value="5">78-95</Option>
      </Select>
    </div>
  );
}
