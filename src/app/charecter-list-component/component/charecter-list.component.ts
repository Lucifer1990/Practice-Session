import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';

import { AppConstant } from '../../shared/constant/app.constant';
import { CharecterListModel } from '../model/charecter-list.model';
import { CharecterListService } from '../service/charecter-list.service';

@Component({
    moduleId: module.id,
    selector: 'app-charecter-list',
    templateUrl: 'charecter-list.component.html',
    styleUrls: ['charecter-list.component.scss']
})

export class CharecterListComponent implements OnInit, OnChanges {
    @Input() seriesName: string;
    @Output() clickedValue: EventEmitter<string> = new EventEmitter<string>();

    header_title: string = AppConstant.CharecterList.HEADER_TITLE;
    no_records: string = AppConstant.CharecterList.NO_RECORDS;
    showSpinner: boolean;

    charecter_list: CharecterListModel[];
    constructor(private _CharecterListService: CharecterListService,
        private _router: Router) {
        _router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    ngOnInit() {
        this._CharecterListService.getCharecters()
            .subscribe(response => {
                this.charecter_list = response;
            }, error => {

            }, () => {

            });
    }
    ngOnChanges() {
        console.log(this.seriesName);
    }
    showInHeader(name: string) {
        this.clickedValue.emit(name);
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.showSpinner = true;
        }
        if (event instanceof NavigationEnd) {
            this.showSpinner = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.showSpinner = false;
        }
        if (event instanceof NavigationError) {
            this.showSpinner = false;
        }
    }
}
