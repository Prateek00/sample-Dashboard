import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRequesitionComponent } from './batch-requesition.component';

describe('BatchRequesitionComponent', () => {
  let component: BatchRequesitionComponent;
  let fixture: ComponentFixture<BatchRequesitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchRequesitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRequesitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
