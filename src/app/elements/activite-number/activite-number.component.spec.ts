import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteNumberComponent } from './activite-number.component';

describe('ActiviteNumberComponent', () => {
  let component: ActiviteNumberComponent;
  let fixture: ComponentFixture<ActiviteNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviteNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
