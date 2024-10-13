import { Component, Input } from '@angular/core';
import { ParkingSpot } from '../../shared/models/parking-spot/parking-spot.model';
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
  @Input({ required: true }) spots!: ParkingSpot[] | null;
}
