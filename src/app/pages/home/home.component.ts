import { Component } from '@angular/core';
import { ParkingLotComponent } from '../../components/parking-lot/parking-lot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    ParkingLotComponent,
  ],
})
export class HomeComponent {}
