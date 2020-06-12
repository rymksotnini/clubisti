import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBlockchainComplainComponent } from './verify-blockchain-complain.component';

describe('VerifyBlockchainComplainComponent', () => {
  let component: VerifyBlockchainComplainComponent;
  let fixture: ComponentFixture<VerifyBlockchainComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyBlockchainComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyBlockchainComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
