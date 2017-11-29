import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { UsuariosService } from "./services/usuarios.service";
import { MicasService } from "./services/micas.service";

interface IMica {
  nombre: string
  grad: string
  precio : number
  cantidad : number
  total : number
}

@Component({
  selector: 'nota-venta',
  templateUrl: './nota-venta.component.html',
  styleUrls: ['./nota-venta.component.scss'],
})
export class NotaVentaComponent implements OnInit {

  formaNotaVenta: FormGroup;
  titulo = "Nota de Venta";
  total : number = 0;

  constructor(
    private usuariosService: UsuariosService,
    private micasService: MicasService
  ) { }

  ngOnInit() {
    this.formaNotaVenta = new FormGroup({
      'cliente': new FormControl(),
      'fechaCompra': new FormControl(),
      'prodMica': new FormControl(),
      'valorMica1': new FormControl([ 5 ]),
      'pedidoMicas' : new FormArray([]),
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

  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0],
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

  asignaGrad(valor){
    this.mica01.setValue(valor);
  }

  incValor(){
    this.mica01.setValue(
      +this.mica01.value + .05
    );
  }

  decValor(){
    this.mica01.setValue(
      +this.mica01.value - .05
    );
  }

  get mica01(){
    return this.formaNotaVenta.get('valorMica1') as FormControl;
  }

  addListaMicas(){
    var mica: IMica = {
      nombre: this.formaNotaVenta.get('prodMica').value,
      grad: this.formaNotaVenta.get('valorMica1').value,
      precio: (Math.random() * 100),
      cantidad: 0,
      total: 0,
    };
    this.listaMicas.insert(0, new FormControl(mica))
    this.formaNotaVenta.controls.prodMica.setValue('');
  }

  deleteMica(micaReg : FormControl){
    this.total = this.total - micaReg.value.total;
    let index = this.listaMicas.controls.indexOf(micaReg);
    this.listaMicas.removeAt(index);
  }

  get listaMicas(){
    return this.formaNotaVenta.get('pedidoMicas') as FormArray;
  }

  ajustaCantidad(micaReg: FormControl, ajuste: number){
    micaReg.value.cantidad = micaReg.value.cantidad + ajuste;
    micaReg.value.total = micaReg.value.cantidad * micaReg.value.precio;
    this.total = this.total + (micaReg.value.precio * ajuste);
  }
}
