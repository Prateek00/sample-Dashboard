import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedCandidatesComponent } from './unprocessed-candidates.component';

describe('UnprocessedCandidatesComponent', () => {
  let component: UnprocessedCandidatesComponent;
  let fixture: ComponentFixture<UnprocessedCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprocessedCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
