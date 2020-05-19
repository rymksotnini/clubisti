import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {ACTIVATE, API_URL, CATEGORY, CHARITY, PAUSE, TERNINATE} from '../../../../_globals/global-variables';
import {Project} from '../../../../_models/Project';
import {ListReq} from '../../../../_models/requests/ListReq';
import {ProjectStatus} from '../../../../_models/enum/ProjectStatus';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Category} from "../../../../_models/Category";
import {Offer} from "../../../../_models/offer";

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css']
})
export class CharitiesListComponent implements OnInit {

  isVisible = false;
  projects : Project[];
  offers: Offer[];
  currentPage: number;
  sizePage: number;
  projectStatus = ProjectStatus;
  sort = 'createdAt,desc';
  first = 0;
  cols: any[];
  uri: string;
  test: any;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NzModalService
             ) {

  }

  ngOnInit() {
    this.uri = this.route.snapshot.routeConfig.path;
    this.currentPage = 1;
    this.sizePage = 10;
    this.getProjects();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'offer.name', header: 'Name' },
      { field: 'startDate', header: 'start at' },
      { field: 'endDate', header: 'end at' },
      { field: 'offer.amount', header: 'Amount' },
      { field: 'minDonationAmount', header: 'MIN DA' },
      { field: 'maxDonationAmount', header: 'MAX DA' },
      { field: 'lastUpdatedSum', header: 'SUM' },

      { field: 'offer.createdAt', header: 'Created dAt' },
      { field: 'offer.updatedAt', header: 'Updated At' },
      { field: 'status', header: 'status' },
      { field: 'action', header: 'Controls' }
    ];

  }

  // getProjects() {
  //   let params: any;
  //   const selectedPage = this.currentPage ;
  //   params = new HttpParams().set('page', selectedPage.toString())
  //     .set('perPage', this.sizePage.toString());
  //
  //   this.crudService.getAllWithParams(API_URL+ CHARITY, params).subscribe(
  //     (response) => {
  //       this.projects = response;
  //       console.log(this.projects);
  //       this.currentPage = this.projects.meta.current_page;
  //     },
  //     (error =>  {
  //       console.log(error);
  //     })
  //   );
  // }

  getProjects() {
    this.crudService.getAll(API_URL + CHARITY).subscribe(
          (response) => {
            this.projects = response.data;
            console.log(this.projects);
          },
          (error =>  {
            console.log(error);
          })
        );
    // this.crudService.getAll(API_URL + CHARITY)
    //   .toPromise()
    //   .then(res => res.data as Project[])
    //   .then(data => { return data; })
    //   .then(cars => this.projects = cars);

  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getProjects();
  }


  pauseProject(project: Project) {
    this.crudService.update(API_URL +CHARITY + PAUSE, project.id, {} ).subscribe(
      (response) => {
        this.getProjects();
      }  , (error =>  {
        console.log(error);
      })
    )
  }



  activateProject(project: Project) {

    this.crudService.update(API_URL +CHARITY + ACTIVATE, project.id, {} ).subscribe(
      (response) => {
          this.getProjects();
      }  , (error =>  {
      console.log(error);
    })
    )
  }

  endProject(project: Project) {
    this.crudService.update(API_URL +CHARITY + TERNINATE, project.id, {} ).subscribe(
      (response) => {
        this.getProjects();
      }  , (error =>  {
        console.log(error);
      })
    )
  }

  showDeleteConfirm(project: Project): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to end this project?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.endProject(project),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteProject(id: number) {
    this.crudService.delete(API_URL + CHARITY, id).subscribe(
      (response => {
        console.log(response);
        this.getProjects();
      }) ,
      (error => {
        console.log(error);
      })
    )
  }

  updateProject(id: number) {
    this.router.navigate(['admin/charity/update/', id]);
  }
}
