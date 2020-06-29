import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  API_URL,
  GROUPS,
  GROUPS_ACCEPT, GROUPS_DENY,
  GROUPS_INVITATIONS,
  GROUPS_JOIN, GROUPS_LEAVE,
  GROUPS_USERS
} from "../_globals/global-variables";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<any>(API_URL+GROUPS);
  }
  save(body) {
    const preparedRequest = {
      GRP_NAME: body.name,
      GRP_DESC: body.description,
      GRP_PASSWORD: body.password
    }
    return this.http.post<any>(API_URL+GROUPS, preparedRequest);
  }

  join(groupID, password) {
    const preparedRequest = {
      'GRP_ID': groupID,
      'GRP_PASSWORD': password
    }
    console.log(preparedRequest)
    return this.http.post<any>(API_URL+GROUPS_JOIN, preparedRequest);
  }

  getGroupById(id) {
    return this.http.get<any>(API_URL+GROUPS+'/'+id);
  }

  getAllUsers(GRP_ID: any) {
    return this.http.get<any>(API_URL+GROUPS_USERS+'/'+GRP_ID);
  }

  getAllInvitations(GRP_ID: any) {
    return this.http.get<any>(API_URL+GROUPS_INVITATIONS+'/'+GRP_ID);
  }

  accept(groups_request_id) {
    return this.http.post<any>(API_URL+GROUPS_ACCEPT, {groups_request_id: groups_request_id});
  }

  deny(groups_request_id) {
    return this.http.post<any>(API_URL+GROUPS_DENY, {groups_request_id: groups_request_id});
  }

  leaveGroup() {
    return this.http.post<any>(API_URL+GROUPS_LEAVE,{});
  }
}
