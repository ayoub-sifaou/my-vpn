import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEvaluatedComponent } from './component-evaluated.component';

describe('ComponentEvaluatedComponent', () => {
  let component: ComponentEvaluatedComponent;
  let fixture: ComponentFixture<ComponentEvaluatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEvaluatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEvaluatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
