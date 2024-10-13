import { DatePipe } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { ParkingSpotService } from '../../../../shared/services/parking-spot/parking-spot.service';

@Component({
  selector: 'app-remove-vehicle-dialog',
  standalone: true,
  templateUrl: './remove-vehicle-dialog.component.html',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    DatePipe,
  ],
})
export class RemoveVehicleDialogComponent {
  private dialogRef = inject(MatDialogRef);
  private parkingSpotService = inject(ParkingSpotService);
  private toastr = inject(ToastrService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  releaseVehicle() {
    this.parkingSpotService.releaseVehicle(this.data.id).subscribe(() => {
      this.toastr.success('Veículo removido com sucesso');
      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
