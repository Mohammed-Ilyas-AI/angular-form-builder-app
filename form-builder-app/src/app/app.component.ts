import { Component } from '@angular/core';
import { ThreePaneLayoutComponent } from './components/three-pane-layout/three-pane-layout.component';

@Component({
  selector: 'app-root',
  imports: [ThreePaneLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-builder-app';
}
