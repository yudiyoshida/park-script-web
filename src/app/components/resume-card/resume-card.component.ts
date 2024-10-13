import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ParkingLot } from '../../shared/models/parking-lot/parking-lot.model';
import { ResumeInformationComponent } from './components/resume-information/resume-information.component';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  templateUrl: './resume-card.component.html',
  imports: [
    MatCardModule,
    DatePipe,
    ResumeInformationComponent,
  ],
})
export class ResumeCardComponent {
  @Input({ required: true }) public parkingLot!: ParkingLot | null;
}
