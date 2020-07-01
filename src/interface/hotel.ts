export interface HotelFromDB {
  id: string | number;
  name: string;
  address: string;
  zipCode: number | string;
  city: number;
  roomCount?: string | number;
  createdAt: string;
  updatedAt: string;
  sectorId?: string | number;
  sector?: SectorFromDB;
  visits?: LastestHotelVisits[] | [];
}

export interface SectorFromDB {
  id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
  hotels?: HotelFromDB[] | [] | undefined | any;
  teams?: Teams;
}

export interface LastestHotelVisits {
  id: number | string;
  rate: number | string;
  date: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  teamId: null | string | number;
  hotelId: string | number;
}

interface Teams {
  id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
  sectorId: number;
  sector: SectorFromDB;
}

export interface Visit {
  id: string;
  rate: number;
  status: number;
  isUrgent: boolean;
  createdAt: string;
  updatedAt: string;
  teamId: string | number;
  hotelId: string | number;
  hotel: HotelFromDB;
  start?: string;
  end?: string;
}
