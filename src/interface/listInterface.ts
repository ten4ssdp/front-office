import { ReactText, Dispatch } from 'react';

export interface ColumnsInterface {
  title: string;
  dataIndex: string;
  key?: string;
  render?: (text?: string, record?: any) => any;
}

export type HotelsDatasInterface = {
  key: string | number | ReactText;
  hotel: string;
  visite: string | number;
  rate: number | string;
  area: string | ReactText;
};

export type EffectifsDatasInterface = {
  key: string | number;
  firstname: string;
  lastname: string;
  area: string;
  role: string;
  dispatch: Dispatch<{ type: string; payload: any }>;
};

export type CarsDatasInterface = {
  key: string | number;
  carId: string;
  carModel: string;
  city: string;
  available: boolean | string;
  parkingAddress: string;
};

export interface PropsList {
  columns: ColumnsInterface[];
  loading?: boolean;
  data:
    | HotelsDatasInterface[]
    | EffectifsDatasInterface[]
    | CarsDatasInterface[];
}
