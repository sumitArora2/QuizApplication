import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSubjectsComponent } from './school-subjects.component';

describe('SchoolSubjectsComponent', () => {
  let component: SchoolSubjectsComponent;
  let fixture: ComponentFixture<SchoolSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
