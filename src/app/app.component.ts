import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isAuth = true;

  constructor(private httpClient: HttpClient, private router: Router, private location: Location) {
    this.router.events.subscribe(res => {
      if (location.path() === "" || location.path() === "?error=true") this.isAuth = false;
      else this.isAuth = true;
    });
  }

  ngOnInit(): void {

  }
}
