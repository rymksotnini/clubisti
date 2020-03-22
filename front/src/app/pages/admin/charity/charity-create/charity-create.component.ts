import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {Router} from '@angular/router';
import {API_URL, CHARITY} from '../../../../_globals/global-variables';
import { NzModalService } from 'ng-zorro-antd/modal';
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";

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
  categories = Category;
  createCharity: FormGroup;
  file: any;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.createCharity = this.formBuilder.group({
      name: '',
      shortDescription: '',
      amount: 0
    });
  }



  onSubmit() {
    console.log(this.createCharity)
    /*this.crudService.post(API_URL + CHARITY, this.createCharity.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/list-story']);
      }, (error => console.log(error))
    );*/
  }
  showModal1(): void {
    this.isVisible = true;
  }

  showModal2(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CreateCategoryComponent
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
