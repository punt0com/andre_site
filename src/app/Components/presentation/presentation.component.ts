import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { Router } from '@angular/router';
import { RedirectService } from '../../Services/redirect/redirect.service';
import { WeatherAPIComponent } from '../weather-api/weather-api.component';



@Component({
  selector: 'app-presentation',
  imports: [ContentComponent, WeatherAPIComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  standalone: true
})
export class PresentationComponent {
  constructor(private redirectService: RedirectService) {

  }

  redirect(route: string) {
    this.redirectService.redirect(route);

  }

}
