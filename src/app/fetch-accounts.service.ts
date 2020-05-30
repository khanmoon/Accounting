import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { account } from './accounts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchAccountsService {

  constructor(public http: HttpClient) { }

    makeRequest():  Observable<Array<account>>{
    return this.http.get("/account").pipe(map((res:any)=>{
      return res._embedded.accounts.map((data)=>{
        return new account({name:data.name});
      })
    }));
  }
}
