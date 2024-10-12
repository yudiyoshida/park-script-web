import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VehicleFormService {
  private fb = inject(NonNullableFormBuilder);

  protected vehicleForm = this.fb.group({
    plate: ['', [Validators.required]],
    model: ['', [Validators.required]],
    color: ['', [Validators.required]],
  });

  getForm() {
    return this.vehicleForm;
  }

  resetForm() {
    this.vehicleForm.reset();
    this.vehicleForm.markAsUntouched();
  }
}
