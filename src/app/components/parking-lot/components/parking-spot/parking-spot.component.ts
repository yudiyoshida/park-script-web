import { UpperCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParkingSpotIdService } from '../../../../shared/contexts/parking-spot-id.service';
import { ParkingSpot } from '../../../../shared/models/parking-spot/parking-spot.model';
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
  private parkingSpotIdService = inject(ParkingSpotIdService);

  @Input({ required: true }) spot!: ParkingSpot;

  openDialog() {
    this.parkingSpotIdService.setId(this.spot.id);

    if (this.spot.vehicle) {
      this.dialog.open(RemoveVehicleDialogComponent).afterClosed().subscribe(() => this.parkingSpotIdService.setId(null));
    } else {
      this.dialog.open(ParkVehicleDialogComponent).afterClosed().subscribe(() => this.parkingSpotIdService.setId(null));
    }
  }
}
