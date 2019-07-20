import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDashoardComponent } from './stu-dashoard.component';

describe('StuDashoardComponent', () => {
  let component: StuDashoardComponent;
  let fixture: ComponentFixture<StuDashoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuDashoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
