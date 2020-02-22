import React from 'react';
import { Table } from 'antd';
import { PropsList } from '../../interface/listInterface';

export default function List(props: PropsList) {
  return (
    <div style={{ padding: '0 2%' }}>
      <Table
        scroll={{ y: 550 }}
        loading={props.loading}
        columns={props.columns}
        dataSource={props.data as any}
        tableLayout="fixed"
        size="middle"
      />
    </div>
  );
}
