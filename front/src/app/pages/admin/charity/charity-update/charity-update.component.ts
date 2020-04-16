import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {API_URL, CATEGORY, CHARITY} from '../../../../_globals/global-variables';
import {Project} from '../../../../_models/Project';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-charity-update',
  templateUrl: './charity-update.component.html',
  styleUrls: ['./charity-update.component.css']
})
export class CharityUpdateComponent implements OnInit {

  date = null;
  dateFormat = 'yyyy/MM/dd';
  keys = Object.keys;
  categories : Category[];
  createCharity: FormGroup;
  id : number;
  pipe = new DatePipe('en-US');
  file: any;
  project: Project;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
    this.getProject();
  }

  ngOnInit() {

    console.log(this.project)
    this.getProject();
    this.getCategories();
    this.createCharity = this.formBuilder.group({
            name: '',
            shortDescription: '',
            amount: 0,
            minDonationAmount: 0,
            maxDonationAmount: 0,
            categoriesIds: 0,
            date: []
          });

  }

  initForm(){
    this.createCharity = this.formBuilder.group({
      name: this.project.name,
      shortDescription: this.project.id,
      amount: this.project.amount,
      minDonationAmount: this.project.minDonationAmount,
      maxDonationAmount: this.project.maxDonationAmount,
      categoriesIds: this.project.categories[0].id,
      date: []
    });
  }

  async getProject() {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
     console.log(this.id);
    });
    // this.crudService.getOne(API_URL + CHARITY, this.id).subscribe(
    //   (response => {
    //     console.log(response);
    //     this.project = response.data;
    //     this.createCharity = this.formBuilder.group({
    //       name: '',
    //       shortDescription: response.data.id,
    //       amount: 0,
    //       minDonationAmount: 0,
    //       maxDonationAmount: 0,
    //       categoriesIds: 0,
    //       date: []
    //     });
    //   }),
    //   (error => {
    //     console.log(error);
    //   })
    // )

    const data = await this.http.get<any>(API_URL + CHARITY + '/' + this.id).toPromise();
    this.project = data.data;
    this.initForm();

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
