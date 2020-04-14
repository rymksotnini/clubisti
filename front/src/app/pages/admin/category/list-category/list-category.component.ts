import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {API_URL, CATEGORY} from '../../../../_globals/global-variables';
import {ListReq} from '../../../../_models/requests/ListReq';
import {Category} from '../../../../_models/Category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  isVisible = false;
  categories: ListReq<Category>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 1;
    this.getCategories();
  }

  getCategories() {
    let params: any;
    const selectedPage = this.currentPage;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this.sizePage.toString());


    this.crudService.getAllWithParams(API_URL + CATEGORY, params).subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
        this.currentPage = this.categories.meta.current_page ;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getCategories();
  }




}
