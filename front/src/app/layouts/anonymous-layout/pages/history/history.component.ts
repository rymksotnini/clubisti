import { Component, OnInit } from '@angular/core';
import {Project} from "../../../../_models/Project";
import {Transaction} from "../../../../_models/Transaction";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../_services/crud.service";
import {AuthenticationService} from "../../../../_services/authentication.service";
import {API_URL, CHARITY, PROJECT, TRANSACTIONS, USERS} from "../../../../_globals/global-variables";
import {CreateComplainComponent} from "../complain/create-complain/create-complain.component";
import {User} from "../../../../_models/user";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;
  private currentUser: User;
  projectId: any;
  project: Project;
  transactions: Transaction[];
  first = 0;
  cols: any[];

  constructor(
    private modal: NzModalService,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'createdAt', header: 'Created At' },
      { field: 'amount', header: 'Amount' },
      { field: 'name', header: 'Project name ' },
      { field: 'action', header: '' }
    ];
    this.currentUser = this.authService.getCurrentUser();
    this.getTransactions();

  }



  getTransactions() {
    console.log(this.currentUser.id)
    this.crudService.getAll(API_URL +  USERS + TRANSACTIONS  + '/' + 2).subscribe(
      (response) => {
        this.transactions = response.data;
      },
      (error =>  {
        console.log(error);
      })
    );
  }


  open(id: number) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url }});
      return;
    }
    const modal: NzModalRef = this.modal.create({
      nzTitle: null,
      nzContent: CreateComplainComponent,
      nzComponentParams: {
        transactionId: id
      },
      nzFooter: null
    });
  }

  calculateSum(index: number) {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += this.transactions[i].amount;
    }
    return sum;
  }


  details(rowData) {
    this.router.navigate(['/details/' + rowData.id]);
  }
}
