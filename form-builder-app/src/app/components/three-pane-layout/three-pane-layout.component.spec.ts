import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePaneLayoutComponent } from './three-pane-layout.component';

describe('ThreePaneLayoutComponent', () => {
  let component: ThreePaneLayoutComponent;
  let fixture: ComponentFixture<ThreePaneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreePaneLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreePaneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
