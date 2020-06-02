import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {API_URL, CHARITY, IMG_URL} from "../../../../../_globals/global-variables";
import {CrudService} from "../../../../../_services/crud.service";
import {Project} from "../../../../../_models/Project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project
  IMG_URL = IMG_URL;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getProject(params.get('id'));
    });
  }

  getProject(id: string) {
    this.crudService.getOne(API_URL+ CHARITY, id).subscribe(
      (response) => {
        this.project = response.data;
        console.log(this.project);
      },
      (error =>  {
        console.log(error);
      })
    );
  }

}
