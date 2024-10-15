import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ParkingLot } from '../../models/parking-lot/parking-lot.model';

@Injectable({
  providedIn: 'root',
})
export class ParkingSpotService {
  private http = inject(HttpClient);

  public getSpots() {
    return this.http.get<ParkingLot>(`${environment.api}/parking-spots`);
  }

  public releaseVehicle(parkingSpotId: string) {
    return this.http.post(`${environment.api}/parking-spots/release`, { parkingSpotId });
  }

  public getAmount(parkingSpotId: string) {
    return this.http.get<{ amount: number }>(`${environment.api}/parking-spots/${parkingSpotId}/amount`);
  }

  public getTotalAmount() {
    return this.http.get<{ totalAmount: number }>(`${environment.api}/parkings/total`);
  }
}
