import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../shared/models/client/client.model';

export interface CreateClientResponse {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ParkVehicleFormService {
  private http = inject(HttpClient);

  getClientByCpf(cpf: string): Observable<Client> {
    return this.http.post<Client>(`${environment.api}/clients/find-by-cpf`, { cpf });
  }

  getVehicleByPlate(plate: string): Observable<any> {
    return this.http.post(`${environment.api}/vehicles/find-by-plate`, { plate });
  }

  createClient(client: any): Observable<CreateClientResponse> {
    return this.http.post<CreateClientResponse>(`${environment.api}/clients`, client);
  }
}
