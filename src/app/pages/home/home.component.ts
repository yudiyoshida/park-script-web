import { AsyncPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingLotComponent } from '../../components/parking-lot/parking-lot.component';
import { ResumeCardComponent } from '../../components/resume-card/resume-card.component';
import { ParkingSpotIdService } from '../../shared/contexts/parking-spot-id.service';
import { ParkingSpot } from '../../shared/models/parking-spot/parking-spot.model';
import { ParkingSpotService } from '../../shared/services/parking-spot/parking-spot.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    ParkingLotComponent,
    ResumeCardComponent,
    AsyncPipe,
  ],
})
export class HomeComponent {
  private parkingSpotService = inject(ParkingSpotService);
  private parkingSpotIdService = inject(ParkingSpotIdService);

  public spots$!: Observable<ParkingSpot[]>;

  constructor() {
    // update parking spot list every time the user closes a modal
    effect(() => {
      if (!this.parkingSpotIdService.getId()) {
        this.getSpots();
      }
    });
  }

  private getSpots(): void {
    this.spots$ = this.parkingSpotService.getSpots();
  }
}
