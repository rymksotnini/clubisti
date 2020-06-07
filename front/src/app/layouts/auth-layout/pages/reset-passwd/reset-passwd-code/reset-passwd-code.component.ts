import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../../../_services/crud.service";
import {Router} from "@angular/router";
import {API_URL, RESET, RESETCODE} from "../../../../../_globals/global-variables";

@Component({
  selector: 'app-reset-passwd-code',
  templateUrl: './reset-passwd-code.component.html',
  styleUrls: ['./reset-passwd-code.component.scss']
})
export class ResetPasswdCodeComponent implements OnInit {
  error = false;
  msg: any;
  createReset: FormGroup;
  msgSucess: string;
  success = false;

  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router) { }

  ngOnInit(): void {
    this.createReset = this.formBuilder.group({
      email: ['', Validators.required],
      token: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  reset() {
    if (this.createReset.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }


    this.crudService.post(API_URL + RESETCODE, this.createReset.value).subscribe(
      (response) => {
        console.log(response);
        this.success = true;
        this.msgSucess = 'Password Reset successfully Please login';
        //this.router.navigate(['auth/login']);
      }, (error => {
        console.log(error);
        this.error = true;
        this.msg = error.error.error;
      }
      )
    );
  }

  closeSuccess() {
    this.success = false;
  }
}
