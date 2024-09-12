import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Account } from 'src/app/models/account';
import { Balance } from 'src/app/models/balance';
import { Transactions } from 'src/app/models/transactions';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { BalanceService } from 'src/app/services/balance.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UserService } from 'src/app/services/user.service';
import {MatCardModule} from '@angular/material/card';
declare var window: any;
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: Account = new Account();
  balance: Balance = new Balance();
  user: User = new User();
  transactions: Transactions[];
  transaction: Transactions = new Transactions();
  cid: String;
  aid: String;
  formModal: any;
  formModal2: any;
  constructor(private route: ActivatedRoute, private transactionService: TransactionsService, private router: Router,
    private accountService: AccountService, private userService: UserService, private balanceService: BalanceService
    , private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  display = "none";
  ngOnInit(): void {
    this.app.loginShow=true;
    this.app.loginshow();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('balanceModal'),
    );
    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('transactionModal'),
    );
    this.cid = this.route.snapshot.params['cid'];
    this.aid = this.route.snapshot.params['aid'];
    this.userService.getUserById(this.cid).subscribe(data => {
      this.user = data;
    });
    this.accountService.getAccountdetailsById(this.cid, this.aid).subscribe(acc => {
      this.account = acc;
    });
    this.transactionService.getTransactions(this.aid).subscribe(tran => {
      this.transactions = tran;
    });
  }
  openBalanceModal() {
    this.formModal.display = "block";
    this.formModal.show();
  }
  openTransactionModal() {
    this.formModal2.display = "block";
    this.formModal2.show();
  }
  balanceModalclose() {
    this.formModal.display = "none";
    this.formModal.hide();
  }
  transactionModalclose() {
    this.formModal2.display = "none";
    this.formModal2.hide();
  }
  balancesave() {
    this.balance.accountId = this.aid;
    this.balanceService.createBalance(this.aid, this.balance).subscribe(data => {
      this.balanceModalclose();
      let userId = this.cid;
      this.router.navigate(['account-details', userId, this.aid]);
      this.ngOnInit();
    });
  }
  transactionsave() {
    this.transaction.accountId=this.aid;
    this.transactionService.createTransactions(this.aid, this.transaction).subscribe(data => {
      this.transactionModalclose();
      let userId = this.cid;
      this.router.navigate(['account-details', userId, this.aid]);
      this.ngOnInit();
    });
  }
}
