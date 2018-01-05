import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';

import { NotaVentaComponent } from 'app/vertex/nota-venta/nota-venta.component';
import { BookComponent} from "app/prototipo/book/book.component";
import { FmReactiveComponent } from "app/prototipo/formas/reactive.component";
import { AuthGuardService } from "../../shared/services/auth-guard.service";


const routes: Routes = [
  {
    path: '',
     component: FullLayoutPageComponent,
    data: {
      title: 'Full Layout Page'
    },
  },
  { 
    path: 'notaDeVenta', 
    component: NotaVentaComponent,
    canActivate: [ AuthGuardService ],
  },
  { path: 'book', component: BookComponent },
  { path: 'fmReactiva', component: FmReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
