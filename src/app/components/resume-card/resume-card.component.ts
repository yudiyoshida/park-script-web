import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
export class ResumeCardComponent { }
