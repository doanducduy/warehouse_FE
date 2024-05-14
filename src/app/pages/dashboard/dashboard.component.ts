/// <reference types="@types/googlemaps" />


import { EventService } from './../../core/services/event.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';

import { Stat, Chat, Transaction, Data } from './dashboard.model';

import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions } from './data';
import { ChartType } from '../chart/chartist/chartist.model';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';


// import { ChartComponent } from "ng-apexcharts";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})



/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {
    // mapOptions = {
    //     mapTypeId: "satellite"
    // };
    // term: any;
    // chatData: Chat[];
    transactions: Transaction[];
    // statData: Stat[];
    isChecked: boolean = false;
    showInput: any;

    apiLoaded: Observable<boolean>;

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

    constructor(
        public formBuilder: FormBuilder,
        private apiService: ApiService,
        private eventService: EventService,
        private router: Router,
        private translate: TranslateService,
    ) {

    }
    role = JSON.parse(localStorage.getItem('currentUser')).role;
    pageSize = 10
    pageIndex = 1
    totalCount = 2
    tableName = 'dashboard'
    locations = [];
    data: Data
    listData = <any>[];

    // Form submit
    chatSubmit: boolean;

    formData: FormGroup;

    listType = []


    click(e) {
        e.stopPropagation();
        console.log(e)
    }

    // selectedMarker

    // openInfoWindow(marker: MapMarker, data) {
    //     this.infoWindow.open(marker);
    //     this.selectedMarker = data
    //     console.log(this.selectedMarker)
    // }

    ngOnInit(): void {
        this.fetchData()
        this.eventService.setLoading(true)
        this.apiService.getList(this.tableName + '/total').subscribe({
            next: res => {
                this.data = res
                // console.log(res);

                this.eventService.setLoading(false)
            },
            error: e => {
                this.eventService.setLoading(false)
                this.apiService.showToast(this.translate.instant('Lỗi giữ liệu')
                    , this.translate.instant('Giữ liệu chưa được tải về'), 'error')
            }
        })

        this.eventService.setLoading(false)
    }
    fetchData(params = '') {

        params = '&order=updated_at&direction=desc'
        this.eventService.setLoading(true)
        this.apiService.getList(this.tableName + '/transactions' + `?page=${this.pageIndex}&limit=${this.pageSize}${params}`).subscribe({
            next: (res) => {
                this.listData = res
                this.totalCount = res.length
                // // this.totalCount = res.meta.total
                this.eventService.setLoading(false)
            }
        })
    };
    start = 0
    end = 0
    toTrans() {
        return this.router.navigate(['/transactions']);
    }
    
}
