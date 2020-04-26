import { Component, OnInit } from '@angular/core';
import {API_URL, BADGE} from '../../../../_globals/global-variables';
import {BadgeService} from '../../../../_services/badge.service';
import {Router} from '@angular/router';
import {CrudService} from '../../../../_services/crud.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-badges-create',
  templateUrl: './badges-create.component.html',
  styleUrls: ['./badges-create.component.css']
})
export class BadgesCreateComponent implements OnInit {


  createBadge: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private badgeService: BadgeService,
  ) { }

  ngOnInit() {
    this.createBadge = this.formBuilder.group({
      name: '',
      lower_bond: 0,
      upper_bond: 0
    });
  }



  onSubmit() {
    console.log(this.createBadge.value);

    this.crudService.post(API_URL + BADGE, this.createBadge.value).subscribe(
      (response) => {
        console.log(response);
        this.badgeService.getBadgesAPI();
        this.router.navigate(['/admin/badge']);
      }, (error => console.log(error))
    );
  }


}
