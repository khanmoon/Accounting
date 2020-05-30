import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchAccountsService } from '../fetch-accounts.service';
import { account } from '../accounts';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {
  name:Array<account>;
  constructor(public http: HttpClient, public fetch:FetchAccountsService) { }

  ngOnInit(): void {
  this.fetch.makeRequest().subscribe((data)=>{
    console.log(data)
    this.name = data;
  })
  }


}
