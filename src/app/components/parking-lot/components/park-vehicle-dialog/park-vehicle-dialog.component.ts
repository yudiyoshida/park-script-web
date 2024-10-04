import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParkVehicleFormComponent } from '../../../park-vehicle-form/park-vehicle-form.component';

@Component({
  selector: 'app-park-vehicle-dialog',
  standalone: true,
  templateUrl: './park-vehicle-dialog.component.html',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ParkVehicleFormComponent,
  ],
})
export class ParkVehicleDialogComponent {
  private dialogRef = inject(MatDialogRef);

  closeDialog() {
    this.dialogRef.close();
  }
}
