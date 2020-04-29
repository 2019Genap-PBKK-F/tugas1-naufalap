import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import ExcelView from './components/views/Excel.vue'
import JenisSatkerView from './components/views/JenisSatker.vue'
import MasterIndikatorView from './components/views/MasterIndikator.vue'
import IndikatorPeriodeView from './components/views/IndikatorPeriode.vue'
import SatuanKerjaView from './components/views/SatuanKerja.vue'
import PeriodeView from './components/views/Periode.vue'
import IndikatorSatuanView from './components/views/Indikator_SatuanKerja.vue'
import IndikatorSatuanLogView from './components/views/Indikator_SatuanKerja_Log.vue'
import DataDasarView from './components/views/DataDasar.vue'
import AspekView from './components/views/Aspek.vue'
import CapaianUnitView from './components/views/Capaian_Unit.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'excel',
        component: ExcelView,
        name: 'Excel',
        meta: {description: 'Excel Satker in CoPilot'}
      }, {
        path: 'jenissatker',
        component: JenisSatkerView,
        name: 'JenisSatker',
        meta: {description: 'Jenis Satker in CoPilot'}
      }, {
        path: 'masterindikator',
        component: MasterIndikatorView,
        name: 'MasterIndikator',
        meta: {description: 'Master Indikator in CoPilot'}
      }, {
        path: 'capaian_unit',
        component: CapaianUnitView,
        name: 'Capaian_Unit',
        meta: {description: 'Capaian Unit in CoPilot'}
      }, {
        path: 'periode',
        component: PeriodeView,
        name: 'Periode',
        meta: {description: 'Periode Unit in CoPilot'}
      }, {
        path: 'indikatorP',
        component: IndikatorPeriodeView,
        name: 'IndikatorPeriode',
        meta: {description: 'Indikator Periode Unit in CoPilot'}
      }, {
        path: 'satuankerja',
        component: SatuanKerjaView,
        name: 'SatuanKerja',
        meta: {description: 'Satuan Kerja Unit in CoPilot'}
      }, {
        path: 'indikator_satuan',
        component: IndikatorSatuanView,
        name: 'Indikator_SatuanKerja',
        meta: {description: 'Indikator Satuan Kerja Unit in CoPilot'}
      }, {
        path: 'indikator_satuan_log',
        component: IndikatorSatuanLogView,
        name: 'Indikator_SatuanKerja_Log',
        meta: {description: 'Indikator Satuan Kerja Log Unit in CoPilot'}
      }, {
        path: 'datadasar',
        component: DataDasarView,
        name: 'DataDasar',
        meta: {description: 'Data Dasar Unit in CoPilot'}
      }, {
        path: 'aspek',
        component: AspekView,
        name: 'Aspek',
        meta: {description: 'Aspek Unit in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
