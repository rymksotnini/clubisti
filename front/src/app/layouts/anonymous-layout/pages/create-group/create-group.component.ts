import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GroupsService} from "../../../../_services/groups.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  name = '';
  description = '';
  password = '';
  message = 'Group creation completed. Please check your email and confirm the request';

  constructor(
    private _formBuilder: FormBuilder, private groupsService: GroupsService) {}

  get formArray(): AbstractControl | null { return this.firstFormGroup.get('formArray'); }
  ngOnInit() {
    this.firstFormGroup = new FormGroup({
        'name': new FormControl(null),
        'description': new FormControl(null),
        'password': new FormControl(null)
    })
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.secondFormGroup.value);
  }

  save() {
    this.groupsService.save(this.secondFormGroup.value).subscribe((resp) => {
    }, (error) => {
      console.log(error);
      this.message ='error: ' + error?.error?.message;
    })
  }
}
