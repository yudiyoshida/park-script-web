import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParkingSpotIdService {
  private _id = signal<string|null>(null);

  getId(): string | null {
    return this._id();
  }

  setId(value: string|null): void {
    this._id.set(value);
  }
}
