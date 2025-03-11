import { Component } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-pane',
  imports: [CommonModule],
  templateUrl: './right-pane.component.html',
  styleUrl: './right-pane.component.css',
})
export class RightPaneComponent {
  formFields = [
    { type: 'text', name: 'Text Field' },
    { type: 'checkbox', name: 'Checkbox' },
    { type: 'radio', name: 'Radio Buttons' },
    { type: 'dropdown', name: 'Dropdown' },
  ];

  constructor(private formBuilderService: FormBuilderService) {}

  onDragStart(event: DragEvent, field: any) {
    event.dataTransfer?.setData('field', JSON.stringify(field));
  }
}
