import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: '<img [src]="posterUrl" />'
})

export class ChildRoutePosterComponent implements OnInit {
    completeData: any;
    posterUrl: string = '../app/shared/images/placeholder.png';

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.completeData = this._activatedRoute.parent.data.subscribe(data => {
            this.posterUrl = data['details'][0].poster;
        });
    }
}
