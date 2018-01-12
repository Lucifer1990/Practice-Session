import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AppConstant } from '../constant/app.constant';

@Injectable()

export class AuthenticationRouteGuardService implements CanActivate {
    isAdmin: boolean = AppConstant.CharecterList.IS_ADMIN;

    canActivate(): boolean {
        return this.isAdmin;
    }
}
