import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from '../../Services/redirect/redirect.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private redirectService: RedirectService) {

  }
  environment = environment.env;

  redirect(route: string) {
    this.redirectService.redirect(route);

  }
}
