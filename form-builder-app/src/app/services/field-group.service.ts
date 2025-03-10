import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FieldGroupService {
  private fieldGroups: string[] = [
    'Default field group',
    'Customer Details',
    'Order Information',
    'Billing Address',
    'Shipping Details',
    'Feedback & Reviews'
  ];

  constructor() {}

  /**
   * Get all field groups
   */
  getFieldGroups(): string[] {
    return this.fieldGroups;
  }

  /**
   * Add a new field group
   * @param name - Name of the new field group
   */
  addFieldGroup(name: string) {
    this.fieldGroups.push(name);
  }

  /**
   * Remove a field group by index
   * @param index - Index of the field group to remove
   */
  removeFieldGroup(index: number) {
    if (index >= 0 && index < this.fieldGroups.length) {
      this.fieldGroups.splice(index, 1);
    }
  }

  /**
   * Reorder field groups via drag-and-drop
   * @param fromIndex - Original index of the dragged field group
   * @param toIndex - New index after dropping
   */
  reorderFieldGroups(fromIndex: number, toIndex: number) {
    if (fromIndex !== toIndex && fromIndex >= 0 && toIndex >= 0 && toIndex < this.fieldGroups.length) {
      const draggedItem = this.fieldGroups.splice(fromIndex, 1)[0];
      this.fieldGroups.splice(toIndex, 0, draggedItem);
    }
  }
}
