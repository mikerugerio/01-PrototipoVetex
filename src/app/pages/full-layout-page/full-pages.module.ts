import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';
import { NotaVentaComponent } from "app/vertex/nota-venta/nota-venta.component";

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule
    ],
    declarations: [
        FullLayoutPageComponent,
        NotaVentaComponent
    ]
})
export class FullPagesModule { }
