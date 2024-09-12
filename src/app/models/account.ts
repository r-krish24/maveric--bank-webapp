import { Balance } from "./balance";
import { Transactions } from "./transactions";

export class Account {
    _id:String;
    customerId:String;
    type:String;
    createdAt:Date;
    updatedAt:Date;
    balance:Balance;
    transactions:Transactions[];
}
