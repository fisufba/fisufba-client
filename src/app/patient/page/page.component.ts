import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentPage = ''

    const user_id = +this.route.snapshot.paramMap.get('id');

    this.accountService.getAccount(user_id).subscribe((user:any) => {
      this.user = user;
    });
  }

  display(page) {
    return (this.currentPage === page);
  }

  setPage(page) {
    this.currentPage = page;
  }
}
