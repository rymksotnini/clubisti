import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {API_URL, COMPLAIN} from '../../../../_globals/global-variables';
import {AuthenticationService} from "../../../../_services/authentication.service";

@Component({
  selector: 'app-create-complain',
  templateUrl: './create-complain.component.html',
  styleUrls: ['./create-complain.component.css']
})
export class CreateComplainComponent implements OnInit {
  error = false;
  msg: string;
  createComplain: FormGroup;
  @Input() transactionId;
  constructor(private formBuilder: FormBuilder,
               private crudService: CrudService,
              private authentificationService: AuthenticationService) { }

  ngOnInit(): void {
    this.createComplain = this.formBuilder.group({
      reason: ['',Validators.required],
      body: ['',Validators.required],
      transactionId: this.transactionId
    });
  }


  onSubmit() {
    if (this.createComplain.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    console.log(this.createComplain.value);

    this.crudService.post(API_URL + COMPLAIN, this.createComplain.value).subscribe(
      (response) => {
        this.error = false;
        console.log(response);
      }, (error => {
        console.log(error);
        if( error.status === 406){
          this.error = true;
          this.msg = error.error;
        }
      })
    );

  }
}
