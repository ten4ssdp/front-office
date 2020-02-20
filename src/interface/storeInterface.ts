import { HotelFromDB } from './hotel';
import { Moment } from 'moment';

//TODO: change the any type
export interface MainState {
  [k: string]: string | [] | number | boolean | {};
  title: string;
  modalOpen: boolean;
  dayOff: Moment[];
  areaSelected: string | number;
  idDetailToShow: string | number;
  hostels: HotelFromDB[];
  cars: [];
  idToEdit: string | number;
  refresh: boolean;
}
