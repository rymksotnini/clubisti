import { Component, OnInit } from '@angular/core';
import {API_URL, CHARITY, IMG_URL} from '../../_globals/global-variables';
import {Project} from '../../_models/Project';
import {CrudService} from '../../_services/crud.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-charity-projects',
  templateUrl: './charity-projects.component.html',
  styleUrls: ['./charity-projects.component.scss']
})
export class CharityProjectsComponent implements OnInit {

  public projects: Array<Project>=[];
  currentUser: User;
  constructor(private crudService: CrudService) { }

  IMG_URL = IMG_URL;
  ngOnInit(): void {
    this.getProjects();
  }

  getCurrentUser() {

  }

  getProjects() {
    this.crudService.getAll(API_URL+ CHARITY).subscribe(
      (response) => {
        this.projects = response.data;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  donate(project: Project) {
    alert('donate to project: '+ project?.offer?.name)
  }
}
