import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CharecterListModel } from '../model/charecter-list.model';
import { AppConstant } from '../../shared/constant/app.constant';

@Injectable()

export class CharecterListService {
    url: string = AppConstant.CharecterList.CHARECTER_LIST_URL;
    constructor(private _http: HttpClient) { }
    getCharecters(): Observable<CharecterListModel[]> {
        return this._http.get(this.url)
            .map((res) => res as CharecterListModel[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}
