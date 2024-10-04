import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parking-spot',
  standalone: true,
  templateUrl: './parking-spot.component.html',
  imports: [
    MatIconModule,
    UpperCasePipe,
  ],
})
export class ParkingSpotComponent {
  @Input({ required: true }) spotName!: string;
  @Input({ required: true }) isOccupied!: boolean;
  @Input() plate!: string;

  openDialog() {
    console.log('Open dialog');
  }
}
