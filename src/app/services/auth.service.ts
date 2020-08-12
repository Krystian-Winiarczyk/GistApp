import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any = null;

  constructor(private router: Router, private httpClient: HttpClient) { }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/"]);
  }

  login(token: string) {
    this.httpClient.get("https://api.github.com/user", {
      headers: {
        "Authorization": `token ${token}`,
        "Accept": 'application/vnd.github.v3+json'
      }
    })
      .subscribe(res => {
        this.currentUser = res;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(["/gists"]);
      }, err => {
        this.router.navigate(["/"], {queryParams: {error: true}});
      })
  }
}
