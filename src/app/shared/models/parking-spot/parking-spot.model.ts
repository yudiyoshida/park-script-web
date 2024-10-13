import { Vehicle } from '../vehicle/vehicle.model';
import { ParkingSpotType } from './parking-spot.enum';

export interface ParkingSpot {
  id: string;
  name: string;
  type: ParkingSpotType;
  occupiedAt: Date | null;
  vehicle: Vehicle | null;
}
