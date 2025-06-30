import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirect(route: string) {
    this.router.navigate(['/' + route]);
  }
}
