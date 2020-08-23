import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any = null;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser || JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

}
