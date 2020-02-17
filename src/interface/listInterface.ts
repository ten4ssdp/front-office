export interface ColumnsInterface {
  title: string;
  dataIndex: string;
  key?: string;
  render?: () => any;
}

export type HotelsDatasInterface = {
  key: string | number;
  hotel: string;
  visite: Date | number;
  rate: number;
  area: string;
};

export type EffectifsDatasInterface = {
  key: string | number;
  firstname: string;
  lastname: string;
  area: string;
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
  data:
    | HotelsDatasInterface[]
    | EffectifsDatasInterface[]
    | CarsDatasInterface[];
}
