import { Injectable } from '@angular/core';
import { FormField } from './form-builder.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'formBuilderData';

  constructor() {}

  // Save form data to local storage
  saveForm(fields: FormField[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(fields));
  }

  // Load form data from local storage
  loadForm(): FormField[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Clear form data
  clearForm() {
    localStorage.removeItem(this.storageKey);
  }
}
