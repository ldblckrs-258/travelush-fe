export interface IGuestRoom {
  adults: number;
  children: number;
  childrenAges: number[];
  rooms: number;
  havePets: boolean;
}

export const initialGuestRoom: IGuestRoom = {
  adults: 2,
  children: 0,
  childrenAges: [],
  rooms: 1,
  havePets: false,
};
