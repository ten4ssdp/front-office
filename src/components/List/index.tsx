import React, { useState } from 'react';
import { Table } from 'antd';

export default function List(props: any) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const onSelectChange = (selected: any[]) => {
    setSelectedRowKeys(selected);
    console.log('selectedRowKeys changed: ', selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <Table
        rowSelection={rowSelection}
        columns={props.columns}
        dataSource={props.data}
      />
    </div>
  );
}
