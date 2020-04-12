import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {ACTIVATE, API_URL, CHARITY, PAUSE, TERNINATE} from '../../../../_globals/global-variables';
import {Project} from '../../../../_models/Project';
import {ListReq} from '../../../../_models/requests/ListReq';
import {ProjectStatus} from '../../../../_models/enum/ProjectStatus';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css']
})
export class CharitiesListComponent implements OnInit {

  isVisible = false;
  projects : ListReq<Project>;
  currentPage: number;
  sizePage: number;
  projectStatus = ProjectStatus;
  sort = 'createdAt,desc';
 // user: User;
  uri: string;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NzModalService
             ) {

  }

  ngOnInit() {
    this.uri = this.route.snapshot.routeConfig.path;
    this.currentPage = 1;
    this.sizePage = 1;
    this.getProjects();
  }

  getProjects() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());

    this.crudService.getAllWithParams(API_URL+ CHARITY, params).subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
        this.currentPage = this.projects.meta.current_page;
      },
      (error =>  {
        console.log(error);
      })
    );
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
      nzContent: '<b style="color: red;">The project supposed end date is</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.endProject(project),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
