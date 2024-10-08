import { UpperCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParkingSpotType } from '../../../../shared/models/parking-spot/parking-spot.enum';
import { ParkVehicleDialogComponent } from '../park-vehicle-dialog/park-vehicle-dialog.component';
import { RemoveVehicleDialogComponent } from '../remove-vehicle-dialog/remove-vehicle-dialog.component';

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

  @Input({ required: true }) name!: string;
  @Input({ required: true }) type!: ParkingSpotType;
  @Input({ required: true }) isOccupied!: boolean;
  @Input() plate!: string;

  openDialog() {
    if (this.isOccupied) {
      this.dialog.open(RemoveVehicleDialogComponent);
    } else {
      this.dialog.open(ParkVehicleDialogComponent);
    }
  }
}
