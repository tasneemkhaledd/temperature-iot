import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTempComponent } from './add-temp.component';

describe('AddTutorialComponent', () => {
  let component: AddTempComponent;
  let fixture: ComponentFixture<AddTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTempComponent]
    });
    fixture = TestBed.createComponent(AddTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
