import { Component, HostListener } from '@angular/core';
import { WeatherService } from '../../Services/weather/weather.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-api',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './weather-api.component.html',
  styleUrl: './weather-api.component.scss'
})

export class WeatherAPIComponent {
  constructor(private weatherService: WeatherService) { }

  // citiesNames: string[] = ["CDMX || Mexico || Mexico", "Monterrey || Nuevo Leon || Mexico", "Valencia || España|| Valencian"];
  citiesNames: string[] = new Array();

  allCitiesInfo: any[] = [];
  selectedCity: string | null = "";
  feltTemperatureMax: any[] = [];
  feltTemperatureMin: any[] = [];
  timeStamps: any[] = [];
  cityControl = new FormControl<string | null>(null);

  getLocation() {
    const query = this.cityControl.value;
    this.citiesNames = [];
    if (query) {
      this.weatherService.getLocation(query).subscribe((res: any) => {
        this.allCitiesInfo = [];
        res.results.forEach((result: any) => {
          this.citiesNames.push(result.name + " || " + result.country + " || " + result.admin1);
          this.allCitiesInfo.push({
            name: result.name,
            country: result.country,
            admin1: result.admin1,
            lat: result.lat,
            lon: result.lon,
            asl: result.asl
          });
        })
      });
    }
  }

  getClimate(selectedCity: any) {
    if (!selectedCity) return;

    this.citiesNames = []
    this.selectedCity = selectedCity;
    const cityInfo = this.allCitiesInfo.find(city =>
      city.name === selectedCity.split(" || ")[0] &&
      city.country === selectedCity.split(" || ")[1] &&
      city.admin1 === selectedCity.split(" || ")[2]
    );
    // this.timeStamps = ["2025-06-24", "2025-06-25", "2025-06-26", "2025-06-27", "2025-06-28", "2025-06-29", "2025-06-30"]
    // this.feltTemperatureMin = [28.38, 28.27, 28.29, 29.01, 29.36, 29.34, 29.05]
    // this.feltTemperatureMax = [38.87, 35.21, 36.11, 38.37, 37.15, 38.37, 38.07]
    this.weatherService.getClimate(cityInfo.lat, cityInfo.lon, cityInfo.asl).subscribe((res: any) => {
     
      this.feltTemperatureMax = res.data_day.felttemperature_max;
      this.feltTemperatureMin = res.data_day.felttemperature_min;
      this.timeStamps = res.data_day.time;
    });
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = !!target.closest('.dropDown-square');
    const clickedInsideInput = !!target.closest('.form-control');
    if (!clickedInsideDropdown && !clickedInsideInput) {
      this.citiesNames = [];
    }
  }

}

