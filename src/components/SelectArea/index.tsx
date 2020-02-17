import React, { useContext } from 'react';
import { Select } from 'antd';
import { MainStore } from 'store/MainStore';
import { selectArea } from 'action/mainAction';

const { Option } = Select;

interface Props {
  id?: string;
}

export default function SelectArea(props: Props) {
  const { dispatch } = useContext(MainStore);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    console.log(typeof value);
    selectArea(dispatch, value);
  };

  return (
    <div>
      <Select
        id={props.id}
        style={{ width: 120 }}
        onChange={handleChange}
        placeholder="75"
      >
        <Option value="75">75</Option>
        <Option value="94/92">94/92</Option>
        <Option value="93/77">93/77</Option>
        <Option value="95/78">95/78</Option>
        <Option value="94/91">94/91</Option>
      </Select>
    </div>
  );
}
