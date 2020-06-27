import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {API_URL, COMPLAIN, DETAILS, IMAGE, IMG_URL} from "../../../../../_globals/global-variables";
import {NzMessageService, UploadChangeParam} from "ng-zorro-antd";
import {ImageService} from "../../../../../_services/image.service";
import {CrudService} from "../../../../../_services/crud.service";
import {Complain} from "../../../../../_models/Complain";
import {ActivatedRoute, Route, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-details-complaint',
  templateUrl: './details-complaint.component.html',
  styleUrls: ['./details-complaint.component.scss']
})
export class DetailsComplaintComponent implements OnInit {

  @Input() id;
  complaint: Complain;
  constructor(private formBuilder: FormBuilder,
              private msgService: NzMessageService,
              private imageService: ImageService,
              private crudService: CrudService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.crudService.getOne(API_URL +  COMPLAIN + DETAILS , this.id).subscribe(
      (res) => {
        this.complaint = res.data;
        console.log(this.complaint);
      });
  }

  projectDetails(id: number) {
    console.log("rr")
    this.router.navigate(['/details/' + id]);
  }
}
