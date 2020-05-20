import {Component, DoCheck, OnInit} from '@angular/core';
import {CrudService} from "../../../../../_services/crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesService} from "../../../../../_services/categories.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {CreateCategoryComponent} from "../../../category/create-category/create-category.component";
import {API_URL, CATEGORY} from "../../../../../_globals/global-variables";
import {AccountsService} from "../../../../../_services/accounts.service";
import {Account} from "../../../../../_models/account";
import {ListReq} from "../../../../../_models/requests/ListReq";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit,DoCheck {

  isVisible = false;
  accountsRq: ListReq<Account>=new ListReq<Account>();
  accounts: Array<Account>= new Array<Account>();
  sort = 'createdAt,desc';
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private accountService: AccountsService,
              private modal: NzModalService
  ) {
    this.accountsRq = new ListReq<Account>();
    this.accounts = new Array<Account>();
  }

  ngOnInit() {
    this.accountsRq = new ListReq<Account>();
    this.accounts = new Array<Account>();
    this.accountService.setCurrentPage(1);
    this.accountService.setSizePage(10);
    this.accountService.getAccountsAPI();
    this.accountsRq = this.accountService.getAccounts();
    this.accounts = this.accountsRq.data;
  }
  ngDoCheck(){
    this.accountsRq = this.accountService.getAccounts();
    this.accounts = this.accountsRq.data;
  }

  paginate(page: number) {
    this.accountService.getAccountsPagination(page);
  }

  createAccount(): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Add account',
      nzContent: CreateCategoryComponent,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modal.destroy()
        }
      ]
    });
  }
  delete(account) {
    this.crudService.delete(API_URL + CATEGORY, account.id).subscribe(res => {
      console.log(res)
      account.deleted = 1;
    }, error => {
      console.log(error)
    });
  }


}
