import React from 'react';
import Select from 'antd/lib/select';

const { Option } = Select;

export default function SelectTeam() {
  function onChange(value: string) {
    console.log(`selected ${value}`);
  }
  return (
    <Select
      style={{ width: '90%', marginTop: '10%' }}
      placeholder="Choisir une équipe"
      onChange={onChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  );
}
