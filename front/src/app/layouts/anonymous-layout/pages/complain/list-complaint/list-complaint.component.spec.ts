import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComplaintComponent } from './list-complaint.component';

describe('ListComplaintComponent', () => {
  let component: ListComplaintComponent;
  let fixture: ComponentFixture<ListComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
