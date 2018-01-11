import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

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

    charecter_list: CharecterListModel[];
    constructor(private _CharecterListService: CharecterListService) { }

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
}
