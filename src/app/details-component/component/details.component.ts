import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.scss']
})

export class DetailsComponent implements OnInit {
    contactData;

    constructor(private _route: ActivatedRoute) {}
    ngOnInit() {
        this.contactData = this._route.snapshot.data['details'];
    }
}
