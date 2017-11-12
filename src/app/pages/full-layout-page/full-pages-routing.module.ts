import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';

import { NotaVentaComponent } from 'app/vertex/nota-venta/nota-venta.component';

const routes: Routes = [
  {
    path: '',
     component: FullLayoutPageComponent,
    data: {
      title: 'Full Layout Page'
    },
  },
  { path: 'notaDeVenta', component: NotaVentaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
