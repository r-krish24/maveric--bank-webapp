import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { Urls } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient:HttpClient) { }

  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+""); 

  getAccountdetailsById(cid:String,_id:String):Observable<Account>{
    console.log("headers -",this.header);
    return this.httpClient.get<Account>(`${Urls.accountUrl}/${cid}/accounts/${_id}`, { 'headers': this.header });
  }

  getAccount(cid:String):Observable<Account[]>{
    console.log("headers -",this.header);
    return this.httpClient.get<Account[]>(`${Urls.accountUrl}/${cid}/accounts`, { 'headers': this.header });
  }
  createAccount(cid:String,account:Account):Observable<Object>{
    console.log("headers -",this.header);
    return this.httpClient.post(`${Urls.accountUrl}/${cid}/accounts`,account, { 'headers': this.header });
  }
  deleteAccount(cid:String,aid:String):Observable<Object>{
    console.log("headers1 -",this.header);
    return this.httpClient.delete(`${Urls.accountUrl}/${cid}/accounts/${aid}`, { 'headers': this.header });
  }
}
