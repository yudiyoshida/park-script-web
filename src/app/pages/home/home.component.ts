import { Component } from '@angular/core';
import { ParkingLotComponent } from '../../components/parking-lot/parking-lot.component';
import { ResumeCardComponent } from '../../components/resume-card/resume-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    ParkingLotComponent,
    ResumeCardComponent,
  ],
})
export class HomeComponent {}
