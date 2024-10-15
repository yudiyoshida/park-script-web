import { AsyncPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ParkingLotComponent } from '../../components/parking-lot/parking-lot.component';
import { ResumeCardComponent } from '../../components/resume-card/resume-card.component';
import { ParkingSpotIdService } from '../../shared/contexts/parking-spot-id.service';
import { ParkingLot } from '../../shared/models/parking-lot/parking-lot.model';
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

  public parkingLot$!: Observable<ParkingLot>;
  public totalAmount$!: Observable<number>;

  constructor() {
    // update parking spot list every time the user closes a modal
    effect(() => {
      if (!this.parkingSpotIdService.getId()) {
        this.getParkingLot();
        this.getTotalAmount();
      }
    });
  }

  private getParkingLot(): void {
    this.parkingLot$ = this.parkingSpotService.getSpots();
  }

  private getTotalAmount(): void {
    this.totalAmount$ = this.parkingSpotService.getTotalAmount().pipe(
      map(res => res.totalAmount ?? 0),
    );
  }
}
