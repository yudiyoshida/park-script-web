import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-information',
  standalone: true,
  templateUrl: './resume-information.component.html',
  imports: [],
})
export class ResumeInformationComponent {
  @Input({ required: true }) information!: string;
  @Input({ required: true }) value?: string | number;
}
