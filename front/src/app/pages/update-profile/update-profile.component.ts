import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../_services/image.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  fileData:any;
  imageEditClicked=false;

  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
  }

  clickedTrue(){
    this.imageEditClicked = true;
  }
  fileEvent(e){
    this.fileData = e.target.files[0];
    console.log(this.fileData);
  }

  submit(form: NgForm){
    console.log('submitted');
    this.imageService.postImage(this.fileData).subscribe(data => {
      console.log(data);
    });
  }

}
