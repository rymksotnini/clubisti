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
import { ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA2: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.css']
})
export class BadgesListComponent implements OnInit {



  sort1 = 'createdAt,desc';
  data:any;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private badgeService: BadgeService,
              private modal: NzModalService
  ) {
  }

  displayedColumns: string[] = ['Name', 'Lower Bound', 'Upper Bound', 'Created at','Updated at','Status',''];
  dataSource:any;


  @ViewChild(MatSort, {static: true}) sort: MatSort;



  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.badgeService.setCurrentPage(1);
    this.badgeService.setSizePage(10);
    this.badgeService.getBadgesAPI();
    this.data = this.badgeService.getBadges().data;



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
