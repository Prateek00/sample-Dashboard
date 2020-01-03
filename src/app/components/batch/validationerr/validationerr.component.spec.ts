import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationerrComponent } from './validationerr.component';

describe('ValidationerrComponent', () => {
  let component: ValidationerrComponent;
  let fixture: ComponentFixture<ValidationerrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationerrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
