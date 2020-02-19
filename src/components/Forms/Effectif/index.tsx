import React from 'react';
import { Input, Button } from 'antd';
import SelectArea from 'components/SelectArea';

export default function EffectifForm() {
  return (
    <form>
      <fieldset className="fielset">
        <label htmlFor="lastname">
          Nom
          <Input type="text" name="lastname" id="lastname" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="firstname">
          Prénom
          <Input type="text" name="firstname" id="firstname" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="email">
          Adresse mail
          <Input type="text" name="email" id="email" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="password">
          Mot de passe
          <Input type="text" name="password" id="password" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="aera">
          Secteur
          <SelectArea id="aera" />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="address_1">
          Adresse 1
          <Input type="text" name="address_1" id="address_1" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="address_2">
          Adresse 2
          <Input type="text" name="address_2" id="address_2" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="postalCode">
          Code postal
          <Input type="text" name="postalCode" id="postalCode" allowClear />
        </label>
      </fieldset>
      <fieldset className="fielset">
        <label htmlFor="city">
          Ville
          <Input type="text" name="city" id="city" allowClear />
        </label>
      </fieldset>

      <Button htmlType="submit">Ajouter</Button>
    </form>
  );
}
