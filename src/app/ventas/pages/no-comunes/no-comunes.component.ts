import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre:string = 'Nestor';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural y Slice
  clientes:string[] = ['Yelitza','Nestor','Nelson','Liskerlys','Daniel'];
  clientesMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Yelitza';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.shift()
  }

  // KeyValue Pipe
  persona = {
    nombre:'Nestor',
    edad:18,
    direccion:'Bucaramanga, Colombia'
  }

  // Json Pipe

  heroes = [
    {
      nombre:'superman',
      vuelva:true
    },
    {
      nombre:'batman',
      vuela:false
    },
    {
      nombre:'spiderman',
      vuela:false
    },
    {
      nombre:'ironman',
      vuela:true
    }
  ]

  // Async Pipe
    miObservable = interval( 2000 ); // 1,2,3,4,5,6,

    valorPromesa = new Promise( (resolve, rejects) => {

      setTimeout( () =>{
        resolve( 'tenemos data de promesa' )
      }, 1500 );

    } )
  constructor() {}

  ngOnInit(): void {
  }

}
