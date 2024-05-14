import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { RolesComponent } from './listdevices/roles.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { TokensManageComponent } from './tokens-manage/tokens-manage.component';
import { LoginComponent } from '../account/auth/login/login.component';
import { AuthRoleGuard } from '../core/guards/authRole.guard';
// import { ListWorkspaceComponent } from './list-workspace/list-workspace.component';
import { AccountComponent } from './account/account.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { TrackingComponent } from './tracking/tracking.component';
import { FactoryComponent } from './factory/factory.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    // { 
    //     path: '',
    //     redirectTo:'login',
    //     pathMatch: 'full'
    // },
    // { path: '', component: LoginComponent},
    {
        path: '', component: FactoryComponent, canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin', 'user']
        }
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin', 'user']
        }
    },
    {
        path: 'factory', component: FactoryComponent, canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin', 'user']
        }
    },
    {
        path: 'profile', component: ProfileComponent, canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin', 'user']
        }
    },
    {
        path: 'consignments',
        component: ConsignmentsComponent,
        canActivate: [AuthRoleGuard],
        data: {
            accessRole: ['admin', 'user']
        }
    },

    {
        path: 'user',
        component: UsersComponent,
        canActivate: [AuthRoleGuard],
        data: {
            accessRole: ['admin', 'user']
        }
    },

    {
        path: 'tracking',
        component: TrackingComponent,
        canActivate: [AuthRoleGuard],
        data: {
            accessRole: ['admin', 'user']
        }
    },
    //token
    { path: 'tokens', component: TokensManageComponent, canActivate: [AuthRoleGuard], },
    {
        path: 'person', component: AccountComponent
        , canActivate: [AuthRoleGuard], data: {
            accessRole: ['user']
        }
    },

    //devices
    {
        path: 'deviceslist', component: RolesComponent, canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin', 'user']
        }
    },
    {
        path: 'users', component: UsersComponent
        , canActivate: [AuthRoleGuard], data: {
            accessRole: ['admin']
        }
    },
    // { path: 'booking', component: BookingComponent },
    // { path: 'location', component: LocationComponent, canActivate: [AuthRoleGuard], data: {
    //         accessRole: ['admin', 'user']
    //     } },
    // { path: 'incident', component: IncidentComponent, canActivate: [AuthRoleGuard], data: {
    //         accessRole: ['admin', 'user']
    //     } },

    // { path: 'kanban-board', component: KanbanComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    // { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    // { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    // { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    // { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    // { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    // { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    // { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    // { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
    // { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },

];

@NgModule({
    imports: [RouterModule.forChild(routes),
        // QRCodeModule,
    ],
    exports: [RouterModule]
    //
})
export class PagesRoutingModule { }
