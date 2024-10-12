import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
    MatButtonModule,
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
  public saveClient = output<string>();

  searchClientByCpf() {
    const cpf = this.form.controls.cpf.value;

    if (cpf.length !== CPF_LENGTH) return;

    this.form.disable();
    this.form.controls.name.reset();
    this.form.controls.phone.reset();
    this.parkVehicleFormService.getClientByCpf(cpf).subscribe({
      next: (client) => {
        this.form.enable();
        this.form.patchValue(client);
      },
      error: () => {
        this.form.enable();
        this.toastr.info('Cliente não encontrado. Cadastre o cliente para continuar.');
      },
    });
  }

  createClient() {
    this.form.disable();
    this.parkVehicleFormService.createClient(this.form.value).subscribe({
      next: (res) => {
        this.form.enable();
        this.saveClient.emit(res.id);
      },
      error: () => {
        this.form.enable();
        this.toastr.error('Erro ao cadastrar cliente.');
      },
    });
  }
}
