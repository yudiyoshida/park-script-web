import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../shared/models/client/client.model';

@Injectable({
  providedIn: 'root',
})
export class ParkVehicleFormService {
  private http = inject(HttpClient);

  getByCpf(cpf: string): Observable<Client> {
    return this.http.post<Client>(`${environment.api}/clients`, { cpf });
  }
}
