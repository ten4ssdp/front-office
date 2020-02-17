import React from 'react';
import { Input, Button } from 'antd';

export default function HotelForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="hotelName">
          Nom de l&apos;hôtel
          <Input id="hotelName" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="address_1">
          Adresse 1
          <Input id="address_1" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="address_2">
          Adresse (ligne 2)
          <Input id="address_2" allowClear />
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
      <fieldset>
        <label htmlFor="availableRooms">
          Nombre de chambres
          <Input id="availableRooms" allowClear />
        </label>
      </fieldset>
      <Button htmlType="submit">Ajouter</Button>
    </form>
  );
}
