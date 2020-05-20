import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsUpdateComponent } from './accounts-update.component';

describe('AccountsUpdateComponent', () => {
  let component: AccountsUpdateComponent;
  let fixture: ComponentFixture<AccountsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
