import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.scss']
})

export class DetailsComponent implements OnInit {
    contactData;

    constructor(private _route: ActivatedRoute) {
        // just for example purpose starts
        console.log('using Snapshot' + '  ' + this._route.snapshot.params['id']);
        this._route.params.subscribe(
            (params) => {
                const ID = params['id'];
                console.log('using subscribe' + '  ' + ID);
            }
        );
        // ends
    }
    ngOnInit() {
        this.contactData = this._route.snapshot.data['details'];
    }
}
