import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Badge} from '../../../../../_models/badge';
import {CrudService} from '../../../../../_services/crud.service';
import {API_URL, BADGE} from '../../../../../_globals/global-variables';


@Component({
  selector: 'app-badges-update',
  templateUrl: './badges-update.component.html',
  styleUrls: ['./badges-update.component.css']
})
export class BadgesUpdateComponent implements OnInit, OnChanges {

  @Output() added = new EventEmitter<boolean>();
  @Input() badge: Badge;
  createBadge: FormGroup;
  public backgroundColor: string;
  public icon: string;
  error = false;
  msg: string;
  success = false;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router
  ) { }

  ngOnInit() {
    this.createBadge = this.formBuilder.group({
      name:  ['', Validators.required],
      upperBond: [0, Validators.required]
    });

  }

  ngOnChanges() {
    console.log(this.badge);
    if (this.badge) {
      this.icon = this.badge.icon;
      this.backgroundColor = this.badge.color;
      this.createBadge = this.formBuilder.group({
        name:  [this.badge.name, Validators.required],
        upperBond: [this.badge.upperBond, Validators.required]
      });
    }

  }

  public setColor(type: string, color: string) {

    this.backgroundColor = color;
  }

  public setIcon(type: string, icon: string) {

    this.icon = icon;
  }




  onSubmit() {
    if (this.createBadge.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    this.createBadge.value.icon = this.icon;
    this.createBadge.value.color = this.backgroundColor;
    console.log(this.createBadge.value);
    this.crudService.update(API_URL + BADGE, this.badge.id, this.createBadge.value).subscribe(
      (response) => {
        this.error = false;
        this.success = true;
        this.added.emit(true);
      }, (error => {
        console.log(error);
      })
    );
  }

}
