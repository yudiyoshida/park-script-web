import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ParkingSpot } from '../../models/parking-spot/parking-spot.model';

@Injectable({
  providedIn: 'root',
})
export class ParkingSpotService {
  private http = inject(HttpClient);

  public getSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${environment.api}/parking-spots`);
  }
}
