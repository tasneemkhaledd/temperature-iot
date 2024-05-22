import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDetailsComponent } from './temp-details.component';

describe('TempDetailsComponent', () => {
  let component: TempDetailsComponent;
  let fixture: ComponentFixture<TempDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempDetailsComponent]
    });
    fixture = TestBed.createComponent(TempDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
