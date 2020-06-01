import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from "../../../../_services/crud.service";
import {API_URL, COMPLAIN, DETAILS, IMG_URL, USERS_PROFILE} from "../../../../_globals/global-variables";
import {Transaction} from "../../../../_models/Transaction";
import {ImageService} from "../../../../_services/image.service";
import {Complain} from '../../../../_models/Complain';

@Component({
  selector: 'app-details-complain',
  templateUrl: './details-complain.component.html',
  styleUrls: ['./details-complain.component.scss']
})
export class DetailsComplainComponent implements OnInit {

  id: number;
  complain: Complain;
  image:string;
  constructor(private route: ActivatedRoute,
              private crudService:CrudService) {}

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
       this.crudService.getOne(API_URL +  COMPLAIN + DETAILS ,this.id).subscribe(
         (res) => {
           this.complain = res.data;
           console.log(this.complain);
           console.log(this.complain);
           if (res.data.user.profile.image_url){
             this.image = IMG_URL + res.data.user.profile.image_url;
           }else {
             this.image = 'assets/img/theme/team-4-800x800.jpg';
           }
         });
    });

  }

  accept() {

  }

  decline() {

  }

  processing() {

  }
}
