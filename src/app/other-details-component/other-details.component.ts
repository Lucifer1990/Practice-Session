import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'other-details.component.html'
})

export class ChildRouteOtherdetailsComponent implements OnInit {
    completeData: any;

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.completeData = this._activatedRoute.parent.data.subscribe(data => {
            this.completeData = data['details'][0];
        });
    }
}
