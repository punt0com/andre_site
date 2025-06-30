import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAPIComponent } from './weather-api.component';

describe('WeatherAPIComponent', () => {
  let component: WeatherAPIComponent;
  let fixture: ComponentFixture<WeatherAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
