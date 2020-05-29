import { Component, OnInit } from '@angular/core';
import {API_URL, CHARITY, DONATE, IMG_URL} from "../../_globals/global-variables";
import {Project} from "../../_models/Project";
import {CrudService} from "../../_services/crud.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {AccountsCreateComponent} from "../admin/account/accounts-create/accounts-create.component";
import {CharityAmountComponent} from "./charity-amount/charity-amount.component";

@Component({
  selector: 'app-charity-projects',
  templateUrl: './charity-projects.component.html',
  styleUrls: ['./charity-projects.component.scss']
})
export class CharityProjectsComponent implements OnInit {

  public projects: Array<Project>=[];
  constructor(private crudService: CrudService,
              private modal: NzModalService
              ) { }

  IMG_URL = IMG_URL;
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.crudService.getAll(API_URL+ CHARITY).subscribe(
      (response) => {
        this.projects = response.data;
        console.log(this.projects);
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  donate(project: Project) {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Insert your amount',
      nzContent: CharityAmountComponent,
      nzComponentParams:{
        id: project?.offer?.id
      },
      nzFooter: null
    });
  }
}
