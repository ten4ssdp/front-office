import { HotelFromDB } from './hotel';
import { Moment } from 'moment';
import { StateVisits } from './visits';

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
  visits: StateVisits;
  teamId: '';
  idToEdit: string | number;
  refresh: boolean;
  teamsAndSector: any | null;
}
