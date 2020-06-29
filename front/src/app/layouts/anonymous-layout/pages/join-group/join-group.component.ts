import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../../../_services/groups.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {

  allGroups = [];
  selectedOption = null;
  password = '';
  errorMessage = '';
  constructor(
    private groupsService: GroupsService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  openSnackBar() {
    this._snackBar.open('Request Submitted, check your mail !', '', {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.retreiveGroup();
  }

  retreiveGroup() {
    this.groupsService.getAll().subscribe((resp) => {
      this.allGroups = resp?.data;
    })
  }

  saveData() {
    this.groupsService.join(this.selectedOption, this.password).subscribe((resp) => {
      this.openSnackBar();
      this.router.navigate(['/my-group']);
    },(error) => {
      this.errorMessage = error?.error?.message
    })
  }


}
