import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../_services/image.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_models/user';
import {IMG_URL} from "../../_globals/global-variables";
import {Gender} from "../../_models/enum/Gender";
import {DatePipe} from "@angular/common";
import {Profile} from "../../_models/profile";
import {Address} from "../../_models/address";
import {Country} from "../../_models/country";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  dateFormat = 'yyyy/MM/dd';
  profileToCreate: FormGroup;
  gender = Gender;
  fileData:any;
  imageEditClicked=false;
  currentUser: User;
  public image = null;
  pipe = new DatePipe('en-US');
  constructor(private formBuilder: FormBuilder, private imageService:ImageService,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {

    this.profileToCreate= this.formBuilder.group({
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      gender:'',
      number: '',
      birthday: '',
      street: '',
      street2: '',
      city: '',
      country: '',
      postalCode: '',
    });
    // fetch current user
    this.currentUser = this.authenticationService.getCurrentUser();
    // fetch profile from back
    //
    // fetch current user image
    this.imageService.getImage().subscribe(
      (data) =>{
        this.image = IMG_URL + data; // 'https://clubisti.net/assets/img/'+ data | environment.apiUrl+'/assets/img/'+
      },
      error => {
        console.log(error);
        this.image = 'assets/img/theme/team-4-800x800.jpg';
      }
    )
  }

  clickedTrue(){
    this.imageEditClicked = true;
  }

  fileEvent(e){
    this.fileData = e.target.files[0];
    console.log(this.fileData);
  }

  submit(){
    console.log('submitted');
    if(this.profileToCreate.value.birthday){
      this.profileToCreate.value.birthday = this.pipe.transform(this.profileToCreate.value.birthday, ' yyyy-M-d hh:mm:ss');
    }
    const user = new User();
    user.username = this.profileToCreate.value.username;
    user.email = this.profileToCreate.value.email;
    user.firstName = this.profileToCreate.value.firstName;
    user.lastName = this.profileToCreate.value.lastName;
    const profile = new Profile();
    profile.birth_date = this.profileToCreate.value.birthday;
    profile.phone_number = this.profileToCreate.value.number;
    profile.gender = this.profileToCreate.value.gender;
    const address = new Address();
    address.city = this.profileToCreate.value.city;
    address.street = this.profileToCreate.value.street;
    address.street2 = this.profileToCreate.value.street2;
    const country = new Country();
    country.name = this.profileToCreate.value.country;
    address.country = country;
    profile.address = address;
    user.profile = profile;
    console.log(user);
    // call for update
    /*this.imageService.postImage(this.fileData).subscribe(data => {
      console.log(data);
    });*/
  }

  eliminateNullValues(object){
    const evilResponseProps = Object.keys(object);
    const goodResponse = [];
    for ( const prop of evilResponseProps) {
      if (object.prop !== '' && object.prop!==null){
        console.log(prop);
        goodResponse.push(object.prop);
      }
    }
    return goodResponse
  }

}
