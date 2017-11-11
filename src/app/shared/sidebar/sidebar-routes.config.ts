import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Ventas', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/content-layout', title: 'Compras', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Operaciones', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Nota Venta', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {
                path: '', title: 'Clientes', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: 'javascript:;', title: 'Datos', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: 'javascript:;', title: 'Notas', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '/changelog', title: 'Versiones', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentación', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Soporte', icon: 'ft-life-buoy', class: '', badge: '5', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: true, submenu: [] },

];
