import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../_services/image.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_models/user';
import {API_URL, IMG_URL, USERS_PROFILE} from '../../_globals/global-variables';
import {Gender} from '../../_models/enum/Gender';
import {DatePipe} from '@angular/common';
import {Profile} from '../../_models/profile';
import {Address} from '../../_models/address';
import {Country} from '../../_models/country';
import {CrudService} from '../../_services/crud.service';

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
  currentUser: User = new User();
  currentProfile: Profile = new Profile();
  currentAddress: Address = new Address();
  currentCountry: Country = new Country();
  public image = null;
  pipe = new DatePipe('en-US');
  constructor(private formBuilder: FormBuilder,
              private imageService:ImageService,
              private authenticationService:AuthenticationService,
              private crudService:CrudService) { }

  ngOnInit(): void {
    // fetch profile from back
    this.crudService.getOne(API_URL+USERS_PROFILE,this.authenticationService.getCurrentUser().id).subscribe(
      (res) =>{
        this.currentUser = JSON.parse(res.user);
        this.currentProfile = this.currentUser.profile;
        this.currentAddress = this.currentProfile.address;
        this.currentCountry = this.currentAddress.country;
        console.log(this.currentUser.username);
        console.log(this.currentCountry.name);
        this.initializeForm();
      }
    );
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

  initializeForm(){
    this.profileToCreate.controls['username'].setValue(this.currentUser.username);
    this.profileToCreate.controls['email'].setValue(this.currentUser.email);
    this.profileToCreate.controls['firstName'].setValue(this.currentUser.first_name);
    this.profileToCreate.controls['lastName'].setValue(this.currentUser.last_name);
    this.profileToCreate.controls['gender'].setValue(this.currentProfile.gender);
    this.profileToCreate.controls['number'].setValue(this.currentProfile.phone_number);
    this.profileToCreate.controls['street'].setValue(this.currentAddress.street);
    this.profileToCreate.controls['street2'].setValue(this.currentAddress.street2);
    this.profileToCreate.controls['city'].setValue(this.currentAddress.city);
    this.profileToCreate.controls['postalCode'].setValue(this.currentAddress.postal_code);
    this.profileToCreate.controls['country'].setValue(this.currentCountry.name);
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
    this.currentUser.username = this.profileToCreate.value.username;
    this.currentUser.email = this.profileToCreate.value.email;
    this.currentUser.first_name = this.profileToCreate.value.firstName;
    this.currentUser.last_name = this.profileToCreate.value.lastName;
    this.currentProfile.birth_date = this.profileToCreate.value.birthday;
    this.currentProfile.phone_number = this.profileToCreate.value.number;
    this.currentProfile.gender = this.profileToCreate.value.gender;
    this.currentAddress.city = this.profileToCreate.value.city;
    this.currentAddress.street = this.profileToCreate.value.street;
    this.currentAddress.street2 = this.profileToCreate.value.street2;
    this.currentAddress.postal_code = this.profileToCreate.value.postalCode;
    this.currentCountry.name = this.profileToCreate.value.country;
    this.currentAddress.country = this.currentCountry;
    this.currentProfile.address = this.currentAddress;
    this.currentUser.profile = this.currentProfile;
    const jsonUser = {
      user : {
        username: this.currentUser.username,
        email: this.currentUser.email,
        first_name: this.currentUser.first_name,
        last_name: this.currentUser.last_name,
        profile: {
          gender: this.currentProfile.gender,
          phone_number: this.currentProfile.phone_number,
          birth_date: this.currentProfile.birth_date,
          address: {
            street: this.currentAddress.street,
            street2: this.currentAddress.street2,
            postal_code: this.currentAddress.postal_code,
            city: this.currentAddress.city,
            country: {
              name: this.currentCountry.name
            }
          }
        }
      }
    };
    this.crudService.update(API_URL+USERS_PROFILE,this.authenticationService.getCurrentUser().id,jsonUser).subscribe(
      (result) =>{
        console.log(result.body.user);
        this.authenticationService.savingUser(result);
        // update current user
      }
    );
    // call for update
    /*this.imageService.postImage(this.fileData).subscribe(data => {
      console.log(data);
    });*/
  }

}
