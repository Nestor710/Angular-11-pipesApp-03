import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styles: [
  ]
})
export class NumeroComponent implements OnInit {

  ventasNetas:number = 7245756.5542;
  porcentaje:number = 0.83;


  constructor() { }

  ngOnInit(): void {
  }

}
