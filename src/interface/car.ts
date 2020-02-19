export interface CarFromDB {
  id: string;
  numberPlate: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  parkingId: string | number;
  teamId: string | null | number;
  team: null;
  parking: ParkingFromDB;
}

export interface ParkingFromDB {
  id: number | string;
  address: string;
  zipCode: string;
  city: string;
  createdAt: string;
  updatedAt: string;
}
