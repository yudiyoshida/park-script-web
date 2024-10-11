import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { ParkVehicleFormService } from '../../park-vehicle-form.service';
import { VehicleFormService } from './vehicle-form.service';

const PLATE_LENGTH = 8;

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  templateUrl: './vehicle-form.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
})
export class VehicleFormComponent {
  private parkVehicleFormService = inject(ParkVehicleFormService);
  private toastr = inject(ToastrService);

  public form = inject(VehicleFormService).getForm();

  searchVehicleByPlate(plate: string) {
    if (plate.length !== PLATE_LENGTH) return;

    this.form.disable();
    this.parkVehicleFormService.getVehicleByPlate(plate.toUpperCase()).subscribe({
      next: (vehicle) => {
        this.form.patchValue(vehicle);
        this.form.enable();
      },
      error: () => {
        this.toastr.info('Veículo não encontrado. Cadastre o veículo para continuar.');
        this.form.enable();
      },
    });
  }
}
