import { Injectable } from '@angular/core';
import {Category} from '../_models/Category';
import {HttpParams} from '@angular/common/http';
import {API_URL, CATEGORY} from '../_globals/global-variables';
import {CrudService} from './crud.service';
import {ListReq} from '../_models/requests/ListReq';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: ListReq<Category>;
  private _currentPage: number;
  private _sizePage: number;

  constructor(private crudService: CrudService) { }

  setCategories(categories){
    this.categories = categories;
  }
  getCategories(){
    return this.categories;
  }


  getCurrentPage(): number {
    return this._currentPage;
  }

  setCurrentPage(value: number) {
    this._currentPage = value;
  }

  getSizePage(): number {
    return this._sizePage;
  }

  setSizePage(value: number) {
    this._sizePage = value;
  }

  getCategoriesAPI() {
    let params: any;
    const selectedPage = this._currentPage;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this._sizePage.toString());


    this.crudService.getAllWithParams(API_URL + CATEGORY, params).subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
        this._currentPage = this.categories.meta.current_page ;
      },
      (error =>  {
        console.log(error);
      })
    );
  }
}
