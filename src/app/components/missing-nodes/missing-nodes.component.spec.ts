import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingNodesComponent } from './missing-nodes.component';

describe('MissingNodesComponent', () => {
  let component: MissingNodesComponent;
  let fixture: ComponentFixture<MissingNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
