// map.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { googlemapComponent } from './googlemap.component';
import { GoogleMapsModule } from '@angular/google-maps';

describe('MapComponent', () => {
  let component: googlemapComponent;
  let fixture: ComponentFixture<googlemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [googlemapComponent],
      imports: [GoogleMapsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(googlemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
