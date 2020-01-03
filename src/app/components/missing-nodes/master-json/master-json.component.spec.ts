import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterJsonComponent } from './master-json.component';

describe('MasterJsonComponent', () => {
  let component: MasterJsonComponent;
  let fixture: ComponentFixture<MasterJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
