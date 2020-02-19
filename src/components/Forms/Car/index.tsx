import React from 'react';
import { Input, Button } from 'antd';

export default function CarForm() {
  return (
    <form>
      <fieldset className="fielset">
        <label htmlFor="carId">
          Immatriculation
          <Input type="text" name="address_1" id="carId" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="carModel">
          Modèle
          <Input type="text" name="address_1" id="carModel" allowClear />
        </label>
      </fieldset>
      <Button htmlType="submit">Ajouter</Button>
    </form>
  );
}
