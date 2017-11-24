import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'nota-venta',
  templateUrl: './nota-venta.component.html',
  styleUrls: ['./nota-venta.component.scss'],
})
export class NotaVentaComponent implements OnInit {

  formaNotaVenta: FormGroup;
  titulo = "Nota de Venta";

  constructor() { }

  ngOnInit() {
    this.formaNotaVenta = new FormGroup({
      'cliente': new FormControl(),
      'fechaCompra': new FormControl(),
    });
  }

  onAceptar(){
    console.log(this.formaNotaVenta.value);
  }

}
