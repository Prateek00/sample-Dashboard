import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpidemicComponent } from './epidemic.component';

describe('EpidemicComponent', () => {
  let component: EpidemicComponent;
  let fixture: ComponentFixture<EpidemicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpidemicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpidemicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
