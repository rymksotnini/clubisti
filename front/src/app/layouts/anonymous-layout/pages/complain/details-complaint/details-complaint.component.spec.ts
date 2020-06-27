import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComplaintComponent } from './details-complaint.component';

describe('DetailsComplaintComponent', () => {
  let component: DetailsComplaintComponent;
  let fixture: ComponentFixture<DetailsComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
