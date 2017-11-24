import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { UsuariosService } from "./services/usuarios.service";

@Component({
  selector: 'nota-venta',
  templateUrl: './nota-venta.component.html',
  styleUrls: ['./nota-venta.component.scss'],
})
export class NotaVentaComponent implements OnInit {

  formaNotaVenta: FormGroup;
  titulo = "Nota de Venta";

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.formaNotaVenta = new FormGroup({
      'cliente': new FormControl(),
      'fechaCompra': new FormControl(),
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

}
