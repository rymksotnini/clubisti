import { Component, OnInit } from '@angular/core';
import {Complain} from "../../../../../_models/Complain";
import {CrudService} from "../../../../../_services/crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {ACTIVATE, API_URL, CHARITY, COMPLAIN, PAUSE, TERNINATE} from "../../../../../_globals/global-variables";
import {CreateComplainComponent} from "../create-complain/create-complain.component";
import {DetailsComplainComponent} from "../../../../admin-layout/pages/complain/details-complain/details-complain.component";
import {DetailsComplaintComponent} from "../details-complaint/details-complaint.component";

@Component({
  selector: 'app-list-complaint',
  templateUrl: './list-complaint.component.html',
  styleUrls: ['./list-complaint.component.scss']
})
export class ListComplaintComponent implements OnInit {

  isVisible = false;
  complains: Complain[];
  first = 0;
  cols: any[];
  uri: string;
  test: any;
  constructor(private crudService: CrudService,
              private modal: NzModalService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NzModalService
  ) {

  }

  ngOnInit() {
    this.getComplains();
    this.cols = [
      { field: 'user.username', header: 'Username' },
      { field: 'reason', header: 'reason' },
      { field: 'createdAt', header: 'Send At' },
      { field: 'transaction.amount', header: 'Amount' },
      { field: 'status', header: 'status' }
    ];

  }


  getComplains() {
    this.crudService.getAll(API_URL + COMPLAIN).subscribe(
      (response) => {
        this.complains = response.data;
        console.log(this.complains);
      },
      (error =>  {
        console.log(error);
      })
    );


  }


  pauseComplain(project: Complain) {
    this.crudService.update(API_URL + CHARITY + PAUSE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }



  activateComplain(project: Complain) {

    this.crudService.update(API_URL + CHARITY + ACTIVATE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }

  endComplain(project: Complain) {
    this.crudService.update(API_URL + CHARITY + TERNINATE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }

  showTerminateConfirm(project: Complain): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to end this project?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.endComplain(project),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  showDeleteConfirm(id: number): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete this project?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteComplain(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteComplain(id: number) {
    this.crudService.delete(API_URL + CHARITY, id).subscribe(
      (response => {
        console.log(response);
        this.getComplains();
      }) ,
      (error => {
        console.log(error);
      })
    );
  }

  updateComplain(id: number) {
    this.router.navigate(['admin/charity/update/', id]);
  }

  goToDetails(row) {
    const modal: NzModalRef = this.modal.create({
      nzTitle: null,
      nzContent: DetailsComplaintComponent,
      nzComponentParams: {
        id: row.id
      },
      nzFooter: null
    });
  }

}
