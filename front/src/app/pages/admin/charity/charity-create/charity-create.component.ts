import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {Router} from '@angular/router';
import {API_URL, CATEGORY, CHARITY} from '../../../../_globals/global-variables';
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {HttpParams} from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-charity-create',
  templateUrl: './charity-create.component.html',
  styleUrls: ['./charity-create.component.css']
})
export class CharityCreateComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  date = null;
  dateFormat = 'yyyy/MM/dd';
  keys = Object.keys;
  categories : Category[];
  createCharity: FormGroup;
  pipe = new DatePipe('en-US');
  file: any;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              //private modalService: NzModalService
              ) { }

  ngOnInit() {
    this.getCategories();
    this.createCharity = this.formBuilder.group({
      name: '',
      shortDescription: '',
      amount: 0,
      minDonationAmount: 0,
      maxDonationAmount: 0,
      categoriesIds: 1,
      date: []
    });
  }


  getCategories() {
    this.crudService.getAll(API_URL + CATEGORY).subscribe(
      (response) => {
        this.categories = response.data;
        console.log(this.categories);

      },
      (error =>  {
        console.log(error);
      })
    );
  }



  onSubmit() {

   this.createCharity.value.categoriesIds = [this.createCharity.value.categoriesIds];
    this.createCharity.value.startDate = this.pipe.transform(this.createCharity.value.date[0], ' yyyy-M-d hh:mm:ss');
    this.createCharity.value.endDate =  this.pipe.transform( this.createCharity.value.date[1], 'yyyy-M-d hh:mm:ss');


    console.log(this.createCharity.value);
    this.crudService.post(API_URL + CHARITY, this.createCharity.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/charity']);
      }, (error => console.log(error))
    );
  }

}
