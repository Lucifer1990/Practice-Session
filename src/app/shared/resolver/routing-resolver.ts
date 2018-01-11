import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../service/shared-service.service';
import { IDetailsModel } from '../../details-component/model/details.model';

@Injectable()

export class RoutingResolver implements Resolve<any> {

    constructor(private _sharedService: SharedService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this._sharedService.getDetails(route.paramMap.get('id'));
    }
}
