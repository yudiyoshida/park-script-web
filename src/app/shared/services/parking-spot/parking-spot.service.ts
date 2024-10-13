import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ParkingLot } from '../../models/parking-lot/parking-lot.model';

@Injectable({
  providedIn: 'root',
})
export class ParkingSpotService {
  private http = inject(HttpClient);

  public getSpots(): Observable<ParkingLot> {
    return this.http.get<ParkingLot>(`${environment.api}/parking-spots`);
  }
}
