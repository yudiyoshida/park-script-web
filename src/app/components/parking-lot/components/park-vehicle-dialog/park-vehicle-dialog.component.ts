import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkVehicleFormComponent } from '../../../park-vehicle-form/park-vehicle-form.component';

@Component({
  selector: 'app-park-vehicle-dialog',
  standalone: true,
  templateUrl: './park-vehicle-dialog.component.html',
  imports: [
    MatCardModule,
    ParkVehicleFormComponent,
  ],
})
export class ParkVehicleDialogComponent {
  private dialogRef = inject(MatDialogRef);

  closeDialog() {
    this.dialogRef.close();
  }
}
