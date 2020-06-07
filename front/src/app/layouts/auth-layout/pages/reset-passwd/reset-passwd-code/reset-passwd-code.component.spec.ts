import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswdCodeComponent } from './reset-passwd-code.component';

describe('ResetPasswdCodeComponent', () => {
  let component: ResetPasswdCodeComponent;
  let fixture: ComponentFixture<ResetPasswdCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswdCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswdCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
