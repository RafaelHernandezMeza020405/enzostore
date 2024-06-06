import { Component, OnInit } from '@angular/core';
import {Prenda} from '../Modelo/prenda';
import {PrendaService} from '../Servicio/prenda.service';
@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})
export class PrendaComponent implements OnInit{
  prendas:Prenda[];

  constructor(private prendaService:PrendaService){
  
  }

  
  ngOnInit(): void{
    this.prendaService.getAll().subscribe(
      c => this.prendas=c
    );

  } 
}
