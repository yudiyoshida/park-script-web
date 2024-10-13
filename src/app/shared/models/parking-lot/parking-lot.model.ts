import { ParkingSpot } from '../parking-spot/parking-spot.model';

export interface ParkingLot {
  freeSpots: number;
  occupiedSpots: number;
  totalSpots: number;
  parkingSpots: ParkingSpot[];
}
