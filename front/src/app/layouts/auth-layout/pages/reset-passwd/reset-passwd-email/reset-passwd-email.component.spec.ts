import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswdEmailComponent } from './reset-passwd-email.component';

describe('ResetPasswdEmailComponent', () => {
  let component: ResetPasswdEmailComponent;
  let fixture: ComponentFixture<ResetPasswdEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswdEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswdEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
