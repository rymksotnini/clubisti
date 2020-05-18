import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-test-landing',
  templateUrl: './test-landing.component.html',
  styleUrls: ['./test-landing.component.css']
})
export class TestLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
