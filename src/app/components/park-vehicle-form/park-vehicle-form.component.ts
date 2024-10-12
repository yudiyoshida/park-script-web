import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { map, shareReplay } from 'rxjs';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientFormService } from './components/client-form/client-form.service';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleFormService } from './components/vehicle-form/vehicle-form.service';

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
  private breakpointObserver = inject(BreakpointObserver);
  private clientFormService = inject(ClientFormService);
  private vehicleFormService = inject(VehicleFormService);

  @ViewChild('stepper') stepper!: MatStepper;

  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  public closeClick = output<void>();
  public clientForm = this.clientFormService.getForm();
  public vehicleForm = this.vehicleFormService.getForm();

  nextStep() {
    this.stepper.next();
  }

  parkVehicle() {
    this.stepper.next();
    console.log('client', this.clientForm.value);
    console.log('vehicle', this.vehicleForm.value);
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
