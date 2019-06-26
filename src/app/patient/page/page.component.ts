import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PatientPageComponent implements OnInit {

  currentPage;
  user: any = "";
  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.currentPage = ''

    this.accountService.getAccount(Number(localStorage.getItem('user_id'))).subscribe((user:any) => {
      this.user = user;
      console.log(user);
    });
  }

  display(page) {
    return (this.currentPage === page);
  }

  setPage(page) {
    this.currentPage = page;
  }
}
