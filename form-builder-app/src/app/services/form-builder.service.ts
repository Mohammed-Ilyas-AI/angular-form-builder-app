import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  options?: string[]; // For dropdowns or radio buttons
}

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private formFieldsSubject = new BehaviorSubject<FormField[]>([]);
  formFields$ = this.formFieldsSubject.asObservable();

  constructor() {}

  // Add a new field
  addField(field: FormField) {
    const fields = [...this.formFieldsSubject.value, field];
    this.formFieldsSubject.next(fields);
  }

  // Remove a field by ID
  removeField(id: string) {
    const fields = this.formFieldsSubject.value.filter((field) => field.id !== id);
    this.formFieldsSubject.next(fields);
  }

  // Get current fields
  getFields(): FormField[] {
    return this.formFieldsSubject.value;
  }

  // Update a field
  updateField(updatedField: FormField) {
    const fields = this.formFieldsSubject.value.map((field) =>
      field.id === updatedField.id ? updatedField : field
    );
    this.formFieldsSubject.next(fields);
  }
}
