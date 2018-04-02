import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mooaPlatform } from 'mooa';

@Component({
  selector: 'app-mooa-app-online',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    mooaPlatform.handleRouterUpdate(this.router, 'mooa-app-online');
  }
}
