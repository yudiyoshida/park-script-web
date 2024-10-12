import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ClientFormService {
  private fb = inject(NonNullableFormBuilder);

  protected clientForm = this.fb.group({
    cpf: ['', [Validators.required]],
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  getForm() {
    return this.clientForm;
  }

  resetForm() {
    this.clientForm.reset();
    this.clientForm.markAsUntouched();
  }
}
