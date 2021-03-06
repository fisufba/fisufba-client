import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
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
      }, /*{
        path: '/paciente',
        title: 'Paciente',
        icon: 'mdi mdi-account',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },*/ {
        path: '/pacientes',
        title: 'Pacientes',
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
      }, /*{
        path: '/atendente',
        title: 'Atendente',
        icon: 'mdi mdi-account',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },*/
    ]
  }, {
    path: '',
    title: 'Fisioterapeuta',
    icon: 'mdi mdi-account',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/novo/fisioterapeuta',
        title: 'Novo Fisioterapeuta',
        icon: 'mdi mdi-account-plus',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }, /*{
        path: '/fisioterapeuta',
        title: 'Fisioterapeuta',
        icon: 'mdi mdi-account',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },*/
    ]
  }
];
