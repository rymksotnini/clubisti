import { Component, OnInit } from '@angular/core';
import {API_URL, BADGE} from '../../../../_globals/global-variables';
import {CrudService} from '../../../../_services/crud.service';
import {Badge} from '../../../../_models/badge';



@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.css']
})
export class BadgesListComponent implements OnInit {
  isVisible = false;
  badges: Badge[];
  first = 0;
  cols: any[];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getBadge();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'lowerBond', header: 'Lower bond' },
      { field: 'upperBond', header: 'Upper bond' },
      { field: 'createdAt', header: 'Created dAt' },
      { field: 'updatedAt', header: 'Updated At' },
      { field: 'deleted', header: 'Status' },
      { field: 'action', header: '' }
    ];
    console.log(this.badges)
  }


  delete(category) {
    this.crudService.delete(API_URL + BADGE, category.id).subscribe(res => {
      category.deleted = 1;
    }, error => {
      console.log(error)
    });
  }

  getBadge() {

    this.crudService.getAll(API_URL + BADGE)
      .toPromise()
      .then(res => res.data as Badge[])
      .then(data => { return data; })
      .then(data => this.badges = data);



  }

  reset() {
    this.first = 0;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  onAdd($event: any) {
    this.badges.push($event.data);
  }

}
