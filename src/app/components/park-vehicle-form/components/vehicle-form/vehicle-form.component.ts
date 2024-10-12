import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { ParkVehicleFormService } from '../../park-vehicle-form.service';
import { VehicleFormService } from './vehicle-form.service';

const PLATE_LENGTH = 7;

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  templateUrl: './vehicle-form.component.html',
  imports: [
    MatButtonModule,
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
  public saveVehicle = output<string>();
  public returnToClient = output<void>();

  searchVehicleByPlate() {
    const plate = this.form.controls.plate.value;

    if (plate.length !== PLATE_LENGTH) return;

    this.form.disable();
    this.form.controls.model.reset();
    this.form.controls.color.reset();
    this.parkVehicleFormService.getVehicleByPlate(plate).subscribe({
      next: (vehicle) => {
        this.form.enable();
        this.form.patchValue(vehicle);
      },
      error: () => {
        this.form.enable();
        this.toastr.info('Veículo não encontrado. Cadastre o veículo para continuar.');
      },
    });
  }

  createVehicle() {
    this.form.disable();
    this.parkVehicleFormService.createVehicle(this.form.value).subscribe({
      next: (res) => {
        this.form.enable();
        this.saveVehicle.emit(res.id);
      },
      error: () => {
        this.form.enable();
        this.toastr.error('Erro ao cadastrar veículo.');
      },
    });
  }

  goBack() {
    this.returnToClient.emit();
  }
}
