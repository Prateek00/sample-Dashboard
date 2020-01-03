import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePartitionsComponent } from './resume-partitions.component';

describe('ResumePartitionsComponent', () => {
  let component: ResumePartitionsComponent;
  let fixture: ComponentFixture<ResumePartitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePartitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePartitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
