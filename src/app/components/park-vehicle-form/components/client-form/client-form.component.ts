import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { ParkVehicleFormService } from '../../park-vehicle-form.service';
import { ClientFormService } from './client-form.service';

const CPF_LENGTH = 11;

@Component({
  selector: 'app-client-form',
  standalone: true,
  templateUrl: './client-form.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
})
export class ClientFormComponent {
  private parkVehicleFormService = inject(ParkVehicleFormService);
  private toastr = inject(ToastrService);

  public form = inject(ClientFormService).getForm();

  searchClientByCpf(value: string) {
    const cpf = value.replaceAll(/[^0-9]/g, '');

    if (cpf.length !== CPF_LENGTH) return;

    this.form.disable();
    this.parkVehicleFormService.getByCpf(cpf).subscribe({
      next: (client) => {
        this.form.patchValue(client);
        this.form.enable();
      },
      error: () => {
        this.toastr.info('Cliente não cadastrado. Cadastre o cliente para continuar.');
        this.form.enable();
      },
    });
  }
}
