import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  token: string = "";
  error: boolean = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      this.router.navigate(["/gists"]);
    } else {
      this.activatedRoute.queryParams.subscribe(param => {
        if (param["error"]) this.error = true
      })
    }
  }

  submit() {
    this.authService.login(this.token);
  }

}
