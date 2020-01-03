import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: BatchDetailsComponent;
  let fixture: ComponentFixture<BatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
