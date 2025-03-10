import { Component } from '@angular/core';
import { FieldGroupService } from '../../services/field-group.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-pane',
  imports: [CommonModule],
  templateUrl: './left-pane.component.html',
  styleUrl: './left-pane.component.css'
})
export class LeftPaneComponent {
  fieldGroups: string[] = [];
  selectedGroupIndex: number = 0;

  constructor(private fieldGroupService: FieldGroupService) {
    this.fieldGroups = this.fieldGroupService.getFieldGroups();
  }

  addFieldGroup() {
    const newGroup = `New Field Group ${this.fieldGroups.length + 1}`;
    this.fieldGroupService.addFieldGroup(newGroup);
  }

  selectFieldGroup(index: number) {
    this.selectedGroupIndex = index;
  }

  deleteFieldGroup(index: number) {
    this.fieldGroupService.removeFieldGroup(index);
  }

  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent, targetIndex: number) {
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer?.getData('text/plain') || '-1', 10);

    if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
      const draggedItem = this.fieldGroups[draggedIndex];
      this.fieldGroups.splice(draggedIndex, 1);
      this.fieldGroups.splice(targetIndex, 0, draggedItem);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
