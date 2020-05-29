import { Component, OnInit } from '@angular/core';
import {Project} from '../../_models/Project';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CHARITY} from '../../_globals/global-variables';
import {getActiveOffset} from "@angular/material/datepicker/typings/multi-year-view";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  public projects: Array<Project>=[];

  constructor(private crudService: CrudService ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.crudService.getAll(API_URL+ CHARITY).subscribe(
      (response) => {
        console.log(response.data);
        this.projects = response.data;

      },
      (error =>  {
        console.log(error);
      })
    );
  }

}
