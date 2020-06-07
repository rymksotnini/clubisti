import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../../../_services/crud.service";
import {API_URL, CATEGORY, RESET} from "../../../../../_globals/global-variables";
import {Route, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-reset-passwd-email',
  templateUrl: './reset-passwd-email.component.html',
  styleUrls: ['./reset-passwd-email.component.scss']
})
export class ResetPasswdEmailComponent implements OnInit {
  error = false;
  textError: any;
  createReset: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.createReset = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  reset() {
    if (this.createReset.invalid) {
      this.error = true;
      this.textError = 'Fields are required';
      return;
    }


    this.crudService.post(API_URL + RESET, this.createReset.value).subscribe(
      (response) => {
        this.router.navigate(['auth/recover/code']);
      }, (error => console.log(error))
    );
  }

}
