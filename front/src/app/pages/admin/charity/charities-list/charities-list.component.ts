import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../../_services/crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {API_URL} from '../../../../_globals/global-variables';

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css']
})
export class CharitiesListComponent implements OnInit {

  isVisible = false;
  stories;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
 // user: User;
  uri: string;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
             ) {

  }

  ngOnInit() {
    this.uri = this.route.snapshot.routeConfig.path;
    this.currentPage = 1;
    this.sizePage = 6;
    this.getStories();
  }

  getStories() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());

    console.log(params);
    let url: string;

      url = API_URL ;

    console.log(this.uri, url)
    /*this.crudService.getAllWithParams(url, params).subscribe(
      (response) => {
        this.stories = response;
        console.log(this.stories);
        this.currentPage = this.stories.pageable.pageNumber + 1;
      },
      (error =>  {
        console.log(error);
      })
    );*/
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getStories();
  }



  addChapter() {

  }

}
