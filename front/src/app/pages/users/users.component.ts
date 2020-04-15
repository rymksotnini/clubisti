import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CATEGORY, USERS} from '../../_globals/global-variables';
import {ListReq} from '../../_models/requests/ListReq';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: ListReq<User>;
  constructor( private _snackBar: MatSnackBar, private crudService: CrudService) { }

  ngOnInit(): void {
    this.retreiveUsers();
    this.openSnackBar('test','mouch normal');
  }

  retreiveUsers() {
    this.crudService.getAll(API_URL + USERS).subscribe(
      (response) => {
        // this.users = response.data.map(x => Object.assign(new User(), x));
        this.users = response.data;
        console.log('*******************************');
        console.log(this.users);
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  deleteUser(user) {
    this.crudService.delete(API_URL + USERS, user.id).subscribe(res => {
      alert('nja7');
    }, error => {
      alert('fchel');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message);
  }
}
