import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/home',
    title: 'Início',
    icon: 'mdi mdi-home',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }, {
    path: '',
    title: 'Paciente',
    icon: 'mdi mdi-account-card-details',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/novo/paciente',
        title: 'Novo Paciente',
        icon: 'mdi mdi-account-plus',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }, {
        path: '/paciente',
        title: 'Paciente',
        icon: 'mdi mdi-account',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
    ]
  }, {
    path: '',
    title: 'Atendente',
    icon: 'mdi mdi-account',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/novo/atendente',
        title: 'Novo Atendente',
        icon: 'mdi mdi-account-plus',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
    ]
  },
];
