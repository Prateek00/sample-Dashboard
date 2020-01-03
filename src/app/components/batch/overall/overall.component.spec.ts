import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchOverallComponent } from './overall.component';

describe('OverallComponent', () => {
  let component: BatchOverallComponent;
  let fixture: ComponentFixture<BatchOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
