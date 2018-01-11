import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';
import { IDetailsModel } from '../../details-component/model/details.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SharedService {
    walterUrl: string = AppConstant.CharecterList.WALTER_URL;
    dexterUrl: string = AppConstant.CharecterList.DEXTER_URL;
    schofieldUrl: string = AppConstant.CharecterList.SCHOFIELD_URL;
    pabloUrl: string = AppConstant.CharecterList.PABLO_URL;
    finalUrl: string;

    constructor(private _http: HttpClient) {}

    getDetails(id: string): Observable<IDetailsModel[]> {
        switch (id) {
            case '0':
            this.finalUrl = this.walterUrl;
            break;

            case '1':
            this.finalUrl = this.schofieldUrl;
            break;

            case '2':
            this.finalUrl = this.dexterUrl;
            break;

            case '3':
            this.finalUrl = this.pabloUrl;
            break;
        }

        return this._http.get(this.finalUrl)
                    .map((result) => result as IDetailsModel[]);
    }
}
