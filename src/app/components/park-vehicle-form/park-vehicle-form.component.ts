import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-park-vehicle-form',
  standalone: true,
  templateUrl: './park-vehicle-form.component.html',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    AsyncPipe,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
})
export class ParkVehicleFormComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @Output() closeClick = new EventEmitter<void>();

  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  save() {
    console.log('Vehicle parked!');
  }
}
