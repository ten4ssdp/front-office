import React from 'react';
import { Input, Button } from 'antd';
import SelectArea from 'components/SelectArea';

export default function EffectifForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="lastname">
          Nom
          <Input id="lastname" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="firstname">
          Prénom
          <Input id="firstname" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="aera">
          Secteur
          <SelectArea id="aera" />
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
          Adresse 2
          <Input id="address_2" allowClear />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="postalCode">
          Code postal
          <Input id="postalCode" allowClear />
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
