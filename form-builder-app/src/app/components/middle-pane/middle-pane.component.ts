import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';
import { Model } from "survey-core";
import "survey-core/survey-core.min.css";
import { SurveyModule } from 'survey-angular-ui';

@Component({
  selector: 'app-middle-pane',
  standalone: true,
  imports: [SurveyModule],
  templateUrl: './middle-pane.component.html',
  styleUrl: './middle-pane.component.css',
})
export class MiddlePaneComponent implements OnInit {
  surveyModel = new Model({
    elements: [
      { name: 'FirstName', title: 'Enter your first name:', type: 'text' },
      { name: 'LastName', title: 'Enter your last name:', type: 'text' }
    ]
  });

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit() {
    // Subscribe to form fields and update SurveyJS model
    this.formBuilderService.formFields$.subscribe(fields => {
      this.surveyModel.fromJSON({ elements: fields });
    });
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const fieldData = event.dataTransfer?.getData("field");
    if (fieldData) {
      const field = JSON.parse(fieldData);
      this.formBuilderService.addField(field);
    }
  }

}
