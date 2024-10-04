import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-spot',
  standalone: true,
  templateUrl: './parking-spot.component.html',
  imports: [],
})
export class ParkingSpotComponent {
  @Input({ required: true }) spotName!: string;
}
