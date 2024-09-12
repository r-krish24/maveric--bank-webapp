import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions';
import { Urls } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient:HttpClient) { }
  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+"");
   
  getTransactions(aid:String):Observable<Transactions[]>{
    return this.httpClient.get<Transactions[]>(`${Urls.transactionUrl}/${aid}/transactions`, { 'headers': this.header });
  }
  createTransactions(aid:String,transactions:Transactions):Observable<Object>{
    return this.httpClient.post(`${Urls.transactionUrl}/${aid}/transactions`,transactions, { 'headers': this.header });
  }

}
