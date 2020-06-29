import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../_services/authentication.service";
import {GroupsService} from "../../../../_services/groups.service";
import {User} from "../../../../_models/user";

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent implements OnInit {

  currentUser;
  group : any;
  allGroupUsers: User[];
  allPendingInvitations: any[];
  constructor(
    private authenticationService: AuthenticationService,
    private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.allGroupUsers = [];
    this.allPendingInvitations = []
    this.retrieveCurrentUser();
  }

  retrieveCurrentUser() {
    this.authenticationService.getFullCurrentUser().subscribe((resp) => {
      this.currentUser = resp;
      if(this.currentUser?.GRP_ID && this.currentUser?.GRP_ID !== '0000') {
        this.groupsService.getGroupById(this.currentUser?.GRP_ID).subscribe((resp) => {
          this.group = resp;
        });

        if(true) {
          this.groupsService.getAllUsers(this.currentUser.GRP_ID).subscribe((resp) => {
            this.allGroupUsers = resp;
          });

          this.groupsService.getAllInvitations(this.currentUser.GRP_ID).subscribe((resp) => {
            this.allPendingInvitations = resp;
            console.log('test');
            console.log(resp);
          }, (error) => {
            alert('error');
          });
        }
      }
    }, (error) => {

    });
  }

  deny(invitation: any) {
    this.groupsService.deny(invitation?.id).subscribe((resp) => {
      this.retrieveCurrentUser();
    })
  }

  accept(invitation: any) {
    this.groupsService.accept(invitation?.id).subscribe((resp) => {
      this.retrieveCurrentUser();
    })
  }

  leave() {
    this.groupsService.leaveGroup().subscribe((resp)=> {
      this.retrieveCurrentUser();
    })
  }
}
