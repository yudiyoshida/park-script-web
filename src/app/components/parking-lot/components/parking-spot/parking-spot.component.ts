import { UpperCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParkVehicleDialogComponent } from '../park-vehicle-dialog/park-vehicle-dialog.component';

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
  private dialog = inject(MatDialog);

  @Input({ required: true }) spotName!: string;
  @Input({ required: true }) isOccupied!: boolean;
  @Input() plate!: string;

  openDialog() {
    this.dialog.open(ParkVehicleDialogComponent);
  }
}
