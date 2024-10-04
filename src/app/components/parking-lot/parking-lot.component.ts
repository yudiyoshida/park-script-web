import { Component } from '@angular/core';
import { ParkingSpotComponent } from '../parking-spot/parking-spot.component';

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  templateUrl: './parking-lot.component.html',
  imports: [
    ParkingSpotComponent,
  ],
})
export class ParkingLotComponent {
  spots = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'];
}
