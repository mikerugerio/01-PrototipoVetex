import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';

import { NotaVentaComponent } from "app/vertex/nota-venta/nota-venta.component";
import { BookComponent } from "app/vertex/book/book.component";
import { FmReactiveComponent } from "app/prototipo/formas/reactive.component";

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    declarations: [
        FullLayoutPageComponent,
        NotaVentaComponent,
        BookComponent,
        FmReactiveComponent
    ]
})
export class FullPagesModule { }
