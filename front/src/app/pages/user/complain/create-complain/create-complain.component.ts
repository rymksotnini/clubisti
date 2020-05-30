import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';

@Component({
  selector: 'app-create-complain',
  templateUrl: './create-complain.component.html',
  styleUrls: ['./create-complain.component.css']
})
export class CreateComplainComponent implements OnInit {
  error = false;
  msg: string;
  createCategory: FormGroup;
  @Input() transactionId;
  constructor(private formBuilder: FormBuilder,
               private crudService: CrudService) { }

  ngOnInit(): void {
    this.createCategory = this.formBuilder.group({
      reason: ['',Validators.required],
      body: ['',Validators.required]
    });
  }


  onSubmit() {

  }
}
