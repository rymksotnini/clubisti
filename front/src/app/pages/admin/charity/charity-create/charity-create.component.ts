import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {Router} from '@angular/router';
import {API_URL, CATEGORY, CHARITY, IMAGE} from '../../../../_globals/global-variables';
import { DatePipe } from '@angular/common';
import {ImageService} from "../../../../_services/image.service";
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
  idOffer:any;
  file: any;
  shortImage: any;
  largeImage: any;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private imageService:ImageService,
              ) { }

  ngOnInit() {
    this.getCategories();
    this.createCharity = this.formBuilder.group({
      name: '',
      shortDescription: '',
      longDescription: '',
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

  fileEventShortFile(e){
    this.shortImage = e.target.files[0];

  }
  fileEventLargeFile(e){
    this.largeImage = e.target.files[0];

  }

  onSubmit() {
    console.log(this.createCharity.value.categoriesIds);
   this.createCharity.value.categoriesIds = [this.createCharity.value.categoriesIds];
    console.log(this.createCharity.value.categoriesIds);
    this.createCharity.value.startDate = this.pipe.transform(this.createCharity.value.date[0], ' yyyy-M-d hh:mm:ss');
    this.createCharity.value.endDate =  this.pipe.transform( this.createCharity.value.date[1], 'yyyy-M-d hh:mm:ss');


    console.log(this.createCharity.value);
    this.crudService.post(API_URL + CHARITY, this.createCharity.value).subscribe(
      (data) => {
        this.idOffer = data.data.offer.id;
        if(this.shortImage && this.largeImage){
          this.imageService.postImageProject(this.largeImage,this.shortImage,this.idOffer,CHARITY + IMAGE).subscribe(data => {
            console.log(data);
          });
        }
      }, (error => console.log(error))
    );
    // post image

    this.router.navigate(['/admin/charity']);
  }
}
