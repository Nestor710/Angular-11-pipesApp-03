import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'nestor';
  nombreUpper:string = 'NESTOR';
  nombreCompleto:string = 'NEstoR lImA';

  fecha:Date = new Date(); // fecha del dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
