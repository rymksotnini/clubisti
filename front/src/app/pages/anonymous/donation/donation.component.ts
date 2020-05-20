import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {chartExample1, chartExample2, chartOptions, parseOptions} from "../../../variables/charts";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateComplainComponent} from "../../user/complain/create-complain/create-complain.component";



@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    const chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    const ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    const chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  open() {
    console.log("oepn")
    const modalRef = this.modalService.open(CreateComplainComponent);
    modalRef.componentInstance.transactionId = 1;
  }


}
