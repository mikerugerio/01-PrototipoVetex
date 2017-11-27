import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { UsuariosService } from "./services/usuarios.service";
import { MicasService } from "./services/micas.service";

@Component({
  selector: 'nota-venta',
  templateUrl: './nota-venta.component.html',
  styleUrls: ['./nota-venta.component.scss'],
})
export class NotaVentaComponent implements OnInit {

  formaNotaVenta: FormGroup;
  titulo = "Nota de Venta";

  constructor(
    private usuariosService: UsuariosService,
    private micasService: MicasService
  ) { }

  ngOnInit() {
    this.formaNotaVenta = new FormGroup({
      'cliente': new FormControl(),
      'fechaCompra': new FormControl(),
      'prodMica': new FormControl(),
      'rate' : new FormControl(),
      'valor1': new FormControl([ 1, 3 ]),
      'valor2': new FormControl([ 2 ]),
    });
  }

  onAceptar(){
    console.log(this.formaNotaVenta.value);
  }

  busquedaCliente = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.usuariosService.clientes.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 15));

  busquedaMica = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.micasService.micas.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 15));


  // Keyboard Support Configuration
  public someKeyboardConfig1: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 0],
    keyboard: true,
    step: 0.05,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 10
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 11,
      stepped: true
    }
  };

  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0],
    keyboard: true,
    step: 1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 10
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 11,
      stepped: true
    }
  };

  asignaGrad(valor){
    this.formaNotaVenta.controls.valor2.setValue(valor);
  }

}
