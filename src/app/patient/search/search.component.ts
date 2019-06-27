import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxDatatableModule  } from '@swimlane/ngx-datatable';
import { FormGroup, FormControl  } from '@angular/forms';

import { AccountService } from '../../account.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  columns = [{ prop: 'nome', width: 500 }, { prop: 'cpf', width: 200 }, {prop: 'acao', width: 200}];
  temp: any;
  form: any;
  users: any;
  data: any = [];

  loadingIndicator = true;
  reorderable = true;
  rows: any = [];

  @ViewChild(SearchComponent) table: SearchComponent;
  constructor(private accountService: AccountService) {
    this.form = new FormGroup({
      'nome': new FormControl(""),
      'cpf': new FormControl(""),
      'telefone': new FormControl(""),
      'email': new FormControl("")
    })

    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  ngOnInit() {
  }

  updateFilter() {
    this.accountService.searchAccount(
      this.form.value.cpf.toString(),
      this.form.value.nome.toString(),
      this.form.value.telefone.toString(),
      this.form.value.email.toString(),
    ).subscribe((users:any) => {
        if(users == null)
          this.users = [];
        else
          this.users = users;

        this.data = [];
        for(let field in this.users) {
          let register = {
            'nome': '',
            'cpf': '',
            'acao': ''
          }

          register.nome = this.users[field].displayName;
          register.cpf = this.users[field].cpf;
          register.acao = '<a href="#/paciente/' + this.users[field].id + '" class="btn btn-info btn-rounded" style="color: white"><i class="mdi mdi-eye"></i> Detalhes</a>';
          this.data.push(register);
        }
        this.rows = this.data;
      });
  }
}
