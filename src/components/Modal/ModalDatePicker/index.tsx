import React, { useContext, useState } from 'react';
import { DatePicker } from 'antd';

import ModalContainer from '..';
import { MainStore } from 'store/MainStore';
import { setDayOff } from 'action/mainAction';

const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';

export default function ModalDatePicker() {
  const { state, dispatch } = useContext(MainStore);
  const [values, setValues] = useState({
    value: state.dayOff,
    dateString: []
  });

  function onChange(value: any, dateString: any): void {
    setValues({ value, dateString });
  }

  function handleDayOff(): void {
    setDayOff(dispatch, values.dateString);
  }

  return (
    <ModalContainer fn={handleDayOff} title="Signaler une absence">
      <RangePicker
        defaultValue={state.dayOff}
        format={dateFormat}
        value={values.value}
        onChange={onChange}
      />
    </ModalContainer>
  );
}
