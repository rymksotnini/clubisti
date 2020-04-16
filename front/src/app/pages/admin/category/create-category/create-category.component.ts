import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {CategoryType} from '../../../../_models/enum/CategoryType';
import {API_URL, CATEGORY} from '../../../../_globals/global-variables';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  keys = Object.keys;
  categories = CategoryType;
  createCategory: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router
  ) { }

  ngOnInit() {
    this.createCategory = this.formBuilder.group({
      name: '',
      type: 'PROJECT'
    });
  }



  onSubmit() {
    console.log(this.createCategory.value);

    this.crudService.post(API_URL + CATEGORY, this.createCategory.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/variable']);
      }, (error => console.log(error))
    );
  }

}
