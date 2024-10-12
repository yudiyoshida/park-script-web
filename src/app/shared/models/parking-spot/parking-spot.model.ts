import { ParkingSpotType } from './parking-spot.enum';

export interface ParkingSpot {
  id: string;
  name: string;
  type: ParkingSpotType;
  vehicleId: string | null;
}
