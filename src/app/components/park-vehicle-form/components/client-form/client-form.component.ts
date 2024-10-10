import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ParkVehicleFormService } from '../../park-vehicle-form.service';
import { ClientFormService } from './client-form.service';

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

  public form = inject(ClientFormService).getForm();

  searchClientByCpf(cpf: string) {
    this.parkVehicleFormService.getByCpf(cpf).subscribe(client => {
      this.form.patchValue(client);
    });
  }
}
