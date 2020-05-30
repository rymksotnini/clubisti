import {Transaction} from './Transaction';

export class Complain {
  private _id: number;
  private _body: string;
  private _reason: string;
  private _transaction: Transaction;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _deleted: boolean;
}
