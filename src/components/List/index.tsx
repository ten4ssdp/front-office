import React, { useState } from 'react';
import { Table } from 'antd';
import { PropsList } from '../../interface/listInterface';

export default function List(props: PropsList) {
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
      <header>
        <h3>{props.title}</h3>
      </header>
      <div style={{ padding: '0 2%' }}>
        <Table
          rowSelection={rowSelection}
          columns={props.columns}
          dataSource={props.data as any}
        />
      </div>
    </div>
  );
}
