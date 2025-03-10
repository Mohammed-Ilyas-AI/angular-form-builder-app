import { Component } from '@angular/core';
import { LeftPaneComponent } from '../left-pane/left-pane.component';
import { RightPaneComponent } from '../right-pane/right-pane.component';
import { MiddlePaneComponent } from '../middle-pane/middle-pane.component';

@Component({
  selector: 'app-three-pane-layout',
  imports: [LeftPaneComponent, RightPaneComponent, MiddlePaneComponent],
  templateUrl: './three-pane-layout.component.html',
  styleUrl: './three-pane-layout.component.css'
})
export class ThreePaneLayoutComponent {

}
