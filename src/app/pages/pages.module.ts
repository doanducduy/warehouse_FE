// import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { PagesRoutingModule } from './pages-routing.module';

import { NgbNavModule, NgbDropdownModule, NgbTooltipModule, NgbPaginationModule, NgbDatepickerModule, NgbDateAdapter, NgbDateParserFormatter, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullCalendarModule } from '@fullcalendar/angular';
// import { DndModule } from 'ngx-drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EcommerceModule } from './ecommerce/ecommerce.module';
// import { EmailModule } from './email/email.module';
// import { UIModule } from './ui/ui.module';
// import { IconsModule } from './icons/icons.module';
// import { ChartModule } from './chart/chart.module';
// import { FormModule } from './form/form.module';
// import { TablesModule } from './tables/tables.module';
// import { MapsModule } from './maps/maps.module';
import { CustomAdapter, CustomDateParserFormatter } from '../shared/services/common.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChartsModule } from 'ng2-charts';
import { LightboxModule } from 'ngx-lightbox';
import { TranslateModule } from '@ngx-translate/core';
import { LocationComponent } from './location/location.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { RolesComponent } from './listdevices/roles.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { TokensManageComponent } from './tokens-manage/tokens-manage.component';
// import { CreateQrcodeComponent } from './create-qrcode/create-qrcode.component';
import { QrCodeModule } from 'ng-qrcode';
import { AccountComponent } from './account/account.component';
import { CurrencyMaskDirective } from "./currency-mask.directive";
import { CurrencyMaskInputMode,NgxCurrencyModule } from "ngx-currency";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {MatNativeDateModule} from '@angular/material/core';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { TrackingComponent } from './tracking/tracking.component';
import { FactoryComponent } from './factory/factory.component';
import { ProfileComponent } from './profile/profile.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    DashboardComponent, 
    LocationComponent, 
    RolesComponent, 
    UsersComponent, 
    CustomersComponent, 
    TokensManageComponent, 
    AccountComponent,
    // ListWorkspaceComponent,
    CurrencyMaskDirective,
    PagenotfoundComponent,
    ConsignmentsComponent,
    TrackingComponent,
    FactoryComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    Ng2SearchPipeModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgxCurrencyModule,
    MatTabsModule,
    MatNativeDateModule,

    // NgxCurrencyDirective,
    // NgApexchartsModule,
    PerfectScrollbarModule,
    QrCodeModule,
    // DndModule,
    FullCalendarModule,
    // IncidentComponent,
    // EcommerceModule,
    // EmailModule,
    // IconsModule,
    // ChartModule,
    // FormModule,
    // TablesModule,
    // MapsModule,
    // LeafletModule,
    WidgetModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgSelectModule,
    ChartsModule,
    LightboxModule,
    NgbCarouselModule,
    TranslateModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAmjEn7OoUoj3EPApR7SvqCWxamJJAb6ig'
    // }),
    GoogleMapsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
    
    // Goog
    // AgmJsMarkerClusteredModule
    // AgmMarkerClustererModule
  ],
  exports: [CurrencyMaskDirective],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ]
})
export class PagesModule { }
