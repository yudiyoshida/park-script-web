import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ToastrService } from 'ngx-toastr';
import { map, shareReplay } from 'rxjs';
import { ParkingSpotIdService } from '../../shared/contexts/parking-spot-id.service';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientFormService } from './components/client-form/client-form.service';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleFormService } from './components/vehicle-form/vehicle-form.service';
import { ParkVehicleFormService } from './park-vehicle-form.service';

@Component({
  selector: 'app-park-vehicle-form',
  standalone: true,
  templateUrl: './park-vehicle-form.component.html',
  imports: [
    MatButtonModule,
    MatStepperModule,
    ClientFormComponent,
    VehicleFormComponent,
    AsyncPipe,
  ],
})
export class ParkVehicleFormComponent implements OnDestroy {
  private toastr = inject(ToastrService);
  private breakpointObserver = inject(BreakpointObserver);
  private clientFormService = inject(ClientFormService);
  private vehicleFormService = inject(VehicleFormService);
  private parkVehicleFormService = inject(ParkVehicleFormService);
  private parkingSpotIdService = inject(ParkingSpotIdService);

  @ViewChild('stepper') stepper!: MatStepper;

  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  public closeClick = output<void>();
  public clientForm = this.clientFormService.getForm();
  public vehicleForm = this.vehicleFormService.getForm();

  previousStep() {
    this.stepper.previous();
  }

  nextStep() {
    this.stepper.next();
  }

  parkVehicle(vehicleId: string) {
    const parkingSpotId = this.parkingSpotIdService.getId();
    if (!parkingSpotId) {
      this.toastr.error('Ocorreu um erro. Feche o formulário e tente novamente.');
      return;
    }

    this.parkVehicleFormService.parkVehicle(parkingSpotId, vehicleId).subscribe({
      next: () => this.stepper.next(),
      error: (err) => this.toastr.error(err.error.message),
    });
  }

  close() {
    this.clientFormService.resetForm();
    this.vehicleFormService.resetForm();
    this.closeClick.emit();
  }

  ngOnDestroy() {
    this.clientFormService.resetForm();
    this.vehicleFormService.resetForm();
  }
}
