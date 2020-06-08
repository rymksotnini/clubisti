import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../../../../_services/crud.service';
import {API_URL, BADGE} from '../../../../../_globals/global-variables';

@Component({
  selector: 'app-badges-create',
  templateUrl: './badges-create.component.html',
  styleUrls: ['./badges-create.component.scss']
})
export class BadgesCreateComponent implements OnInit {

  @Output() added = new EventEmitter<boolean>();
  createBadge: FormGroup;
  error = false;
  msg: string;
  public backgroundColor: string;
  public icon: string;
  success = false;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router
  ) { }

  ngOnInit() {
    this.backgroundColor = '#fff';
    this.icon = 'icon1.png';
    this.createBadge = this.formBuilder.group({
      name:  ['', Validators.required],
      upperBond: [0, Validators.required]
    });
  }

  public setColor(type: string, color: string) {

        this.backgroundColor = color;
  }

  public setIcon(type: string, icon: string) {

    this.icon = icon;
  }

  onSubmit() {
  console.log(this.backgroundColor)
    console.log(this.icon)
    if (this.createBadge.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    this.createBadge.value.icon = this.icon;
    this.createBadge.value.color = this.backgroundColor;

    console.log(this.createBadge.value);

    this.crudService.post(API_URL + BADGE, this.createBadge.value).subscribe(
      (response) => {
        this.error = false;
        this.success = true;
        console.log(response);
        this.added.emit(response);
      }, (error => {
        console.log(error);
        if ( error.status === 404) {
          this.error = true;
          this.msg = 'Invalid Upper bound';
        }
      })
    );
  }


  closeSuccess() {
    this.success = false;
  }

  closeError() {
    this.error = false;
  }
}
