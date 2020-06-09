import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedComponent } from './personalized.component';

describe('PersonalizedComponent', () => {
  let component: PersonalizedComponent;
  let fixture: ComponentFixture<PersonalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
