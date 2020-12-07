import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyBodyComponent } from './policy-body.component';

describe('PolicyBodyComponent', () => {
  let component: PolicyBodyComponent;
  let fixture: ComponentFixture<PolicyBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
