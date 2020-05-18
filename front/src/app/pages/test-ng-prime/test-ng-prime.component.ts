import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CATEGORY} from '../../_globals/global-variables';
import {Category} from '../../_models/Category';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {CreateCategoryComponent} from '../admin/category/create-category/create-category.component';


@Component({
  selector: 'app-test-ng-prime',
  templateUrl: './test-ng-prime.component.html',
  styleUrls: ['./test-ng-prime.component.css']

})
export class TestNgPrimeComponent implements OnInit {
  isVisible = false;
  private categories: Category[];
  first = 0;
  cols: any[];

  constructor(private crudService: CrudService,
              private modal: NzModalService) { }

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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  onAdd($event: any) {
    console.log("event ", $event)
    this.categories.push($event.data);
  }
}
