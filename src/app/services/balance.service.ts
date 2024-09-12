import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance';
import { Urls } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpClient:HttpClient) { }

  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+""); 

  createBalance(aid:String,balance:Balance):Observable<Object>{
    return this.httpClient.post(`${Urls.balanceUrl}/${aid}/balances`,balance, { 'headers': this.header });
  }
}
