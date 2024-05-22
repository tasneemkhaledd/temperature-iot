import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsListComponent } from './temps-list.component';

describe('TempsListComponent', () => {
  let component: TempsListComponent;
  let fixture: ComponentFixture<TempsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempsListComponent]
    });
    fixture = TestBed.createComponent(TempsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
