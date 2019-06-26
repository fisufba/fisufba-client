import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  user: any;
  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    private router: Router,
    private accountService: AccountService,
    private authService: AuthService) {}

  ngOnInit() {
    this.accountService.getAccount(Number(localStorage.getItem('user_id'))).subscribe((user:any) => {
      this.user = user;
    });
  }

  onLogout() {
    this.authService.logout().subscribe(isLoggedOut => {
      if(isLoggedOut)
        this.router.navigateByUrl('');
    });
  }
}
