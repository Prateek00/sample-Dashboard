import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNotificationComponent } from './email-notification.component';

describe('EmailNotificationComponent', () => {
  let component: EmailNotificationComponent;
  let fixture: ComponentFixture<EmailNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
