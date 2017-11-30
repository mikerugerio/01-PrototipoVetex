import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';

import { NotaVentaComponent, NgbdModalContent } from "app/vertex/nota-venta/nota-venta.component";
import { BookComponent } from "app/prototipo/book/book.component";
import { FmReactiveComponent } from "app/prototipo/formas/reactive.component";

import { ProductFilterPipe } from 'app/prototipo/listDependendientes/product-filter.pipe';
import { UsuariosService } from "../../vertex/nota-venta/services/usuarios.service";
import { MicasService } from "../../vertex/nota-venta/services/micas.service";
import { ArmazonesService } from "../../vertex/nota-venta/services/armazones.service";

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        NouisliderModule,
    ],
    declarations: [
        FullLayoutPageComponent,
        NotaVentaComponent,
        BookComponent,
        FmReactiveComponent,
        ProductFilterPipe,
        NgbdModalContent,
    ],
    providers: [
      UsuariosService,
      MicasService,
      ArmazonesService,
    ],
    entryComponents: [
      NgbdModalContent
    ],
})
export class FullPagesModule { }
