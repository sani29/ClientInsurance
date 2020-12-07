import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordBodyComponent } from './record-body.component';

describe('RecordBodyComponent', () => {
  let component: RecordBodyComponent;
  let fixture: ComponentFixture<RecordBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
