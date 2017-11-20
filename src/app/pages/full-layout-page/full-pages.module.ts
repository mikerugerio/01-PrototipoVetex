import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';

import { NotaVentaComponent } from "app/vertex/nota-venta/nota-venta.component";
import { BookComponent } from "app/vertex/book/book.component";
import { FmReactiveComponent } from "app/prototipo/formas/reactive.component";

import { ProductFilterPipe } from 'app/prototipo/listDependendientes/product-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        FullLayoutPageComponent,
        NotaVentaComponent,
        BookComponent,
        FmReactiveComponent,
        ProductFilterPipe
    ]
})
export class FullPagesModule { }
