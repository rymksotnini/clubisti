import { Component, OnInit } from '@angular/core';
import {API_URL, BADGE, CATEGORY} from '../../../../_globals/global-variables';
import {HttpParams} from '@angular/common/http';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BadgeService} from '../../../../_services/badge.service';
import {Badge} from '../../../../_models/badge';
import {ListReq} from '../../../../_models/requests/ListReq';
import {BadgesCreateComponent} from '../badges-create/badges-create.component';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.css']
})
export class BadgesListComponent implements OnInit {



  sort = 'createdAt,desc';
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private badgeService: BadgeService,
              private modal: NzModalService
  ) {

  }

  ngOnInit() {
    this.badgeService.setCurrentPage(1);
    this.badgeService.setSizePage(10);
    this.badgeService.getBadgesAPI();
  }



  paginate(page: number) {

    this.badgeService.getBadgesPagination(page);
  }

  createCustomButtonModal(): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Add badge',
      nzContent: BadgesCreateComponent,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modal.destroy()
        }
      ]
    });
  }

  delete(badge) {
    this.crudService.delete(API_URL + BADGE, badge.id).subscribe(res => {
      console.log(res);
      badge.deleted = 1;
    }, error => {
      console.log(error)
    });
  }
}
