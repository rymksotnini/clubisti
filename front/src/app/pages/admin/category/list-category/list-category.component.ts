import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {API_URL, CATEGORY, USERS} from '../../../../_globals/global-variables';
import {ListReq} from '../../../../_models/requests/ListReq';
import {Category} from '../../../../_models/Category';
import {CategoriesService} from '../../../../_services/categories.service';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {BadgesCreateComponent} from '../../badge/badges-create/badges-create.component';
import {CreateCategoryComponent} from '../create-category/create-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  isVisible = false;

  sort = 'createdAt,desc';
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoriesService,
              private modal: NzModalService
  ) {

  }

  ngOnInit() {
    this.categoryService.setCurrentPage(1);
    this.categoryService.setSizePage(10);
    this.categoryService.getCategoriesAPI();
  }



  paginate(page: number) {
    this.categoryService.getCategoriesPagination(page);
  }

  createGategory(): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Add category',
      nzContent: CreateCategoryComponent,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modal.destroy()
        }
      ]
    });
  }
  delete(category) {
    this.crudService.delete(API_URL + CATEGORY, category.id).subscribe(res => {
      console.log(res)
      category.deleted = 1;
    }, error => {
      console.log(error)
    });
  }


}
