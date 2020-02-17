import React from 'react';
import { Input, Button } from 'antd';

export default function CarForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="carId">
          Immatriculation
          <Input id="carId" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="carModel">
          Modèle
          <Input id="carModel" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="address">
          Adresse parking
          <Input id="address" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="postalCode">
          Code postal
          <Input id="hotelName" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="city">
          Ville
          <Input id="city" allowClear />
        </label>
      </fieldset>
      <Button htmlType="submit">Ajouter</Button>
    </form>
  );
}
