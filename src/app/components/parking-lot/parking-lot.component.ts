import { Component, Input } from '@angular/core';
import { ParkingLot } from '../../shared/models/parking-lot/parking-lot.model';
import { ParkingSpotComponent } from './components/parking-spot/parking-spot.component';

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  templateUrl: './parking-lot.component.html',
  imports: [
    ParkingSpotComponent,
  ],
})
export class ParkingLotComponent {
  @Input({ required: true }) parkingLot!: ParkingLot | null;
}
