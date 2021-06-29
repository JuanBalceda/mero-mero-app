import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mero Mero App';

  users: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const jsonUser = localStorage.getItem('user');
    if (jsonUser) {
      const user: User = JSON.parse(jsonUser);
      this.accountService.setCurrentUser(user);
    }
  }
}
