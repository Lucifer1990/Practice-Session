import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'other-details.component.html'
})

export class ChildRouteOtherdetailsComponent implements OnInit {
    completeData: any;
    genre: string;
    noOfSeasons: string;
    noOfEpisodes: string;
    distributor: string;

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.completeData = this._activatedRoute.parent.data.subscribe(data => {
            this.completeData = data['details'][0];
            this.genre = this.completeData.genre;
            this.noOfSeasons = this.completeData.no_of_seasons;
            this.noOfEpisodes = this.completeData.no_of_episodes;
            this.distributor = this.completeData.distributor;
        });
    }
}
