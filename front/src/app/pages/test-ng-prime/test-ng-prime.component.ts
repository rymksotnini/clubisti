import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Car} from '../test-landing/test-landing.component';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CATEGORY} from '../../_globals/global-variables';
import {MatTableDataSource} from '@angular/material';
import {Category} from '../../_models/Category';
import { SelectItem } from 'primeng/api/selectitem';




@Component({
  selector: 'app-test-ng-prime',
  templateUrl: './test-ng-prime.component.html',
  styleUrls: ['./test-ng-prime.component.css']

})
export class TestNgPrimeComponent implements OnInit {
  private categories: Category[];
  private _currentPage: number;
  private _sizePage = 10;
  first = 0;
  cols: any[];
  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getCategories();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'createdAt', header: 'Created dAt' },
      { field: 'updatedAt', header: 'Updated At' },
      { field: 'deleted', header: 'Status' },
      { field: 'action', header: '' }
    ];
  }

  delete(category) {
    this.crudService.delete(API_URL + CATEGORY, category.id).subscribe(res => {
      category.deleted = 1;
    }, error => {
      console.log(error)
    });
  }

  getCategories() {
    this.crudService.getAll(API_URL + CATEGORY)
  .toPromise()
      .then(res => res.data as Category[])
      .then(data => { return data; })
      .then(cars => this.categories = cars);

    console.log(this.categories);
  }

  reset() {
    this.first = 0;
  }



}
