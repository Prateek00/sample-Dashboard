import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesitionComponent } from './requesition.component';

describe('RequesitionComponent', () => {
  let component: RequesitionComponent;
  let fixture: ComponentFixture<RequesitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
