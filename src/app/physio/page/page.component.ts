import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physio-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PhysioPageComponent implements OnInit {

  currentPage;
  constructor() { }

  ngOnInit() {
    this.currentPage = 'viewProfile'
  }

  display(page) {
    return (this.currentPage === page);
  }

  setPage(page) {
    this.currentPage = page;
      console.log(this.currentPage)
  }
}
