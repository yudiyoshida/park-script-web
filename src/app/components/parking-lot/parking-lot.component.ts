import { Component, inject, OnInit } from '@angular/core';
import { ParkingSpot } from '../../shared/domain/parking-spot/parking-spot.model';
import { ParkingSpotService } from '../../shared/services/parking-spot/parking-spot.service';
import { ParkingSpotComponent } from './components/parking-spot/parking-spot.component';

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  templateUrl: './parking-lot.component.html',
  imports: [
    ParkingSpotComponent,
  ],
})
export class ParkingLotComponent implements OnInit {
  private parkingSpotService = inject(ParkingSpotService);

  public spots: ParkingSpot[] = [];

  ngOnInit(): void {
    this.getSpots();
  }

  private getSpots(): void {
    this.parkingSpotService.getSpots().subscribe(spots => {
      this.spots = spots;
    });
  }
}
