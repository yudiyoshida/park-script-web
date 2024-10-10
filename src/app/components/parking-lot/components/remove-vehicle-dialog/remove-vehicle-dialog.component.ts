import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-remove-vehicle-dialog',
  standalone: true,
  templateUrl: './remove-vehicle-dialog.component.html',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class RemoveVehicleDialogComponent {
  private dialogRef = inject(MatDialogRef);

  closeDialog() {
    this.dialogRef.close();
  }
}
