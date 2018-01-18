import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from '../search-component/component/search-component';
import { DetailsComponent } from '../details-component/component/details.component';
import { AuthenticationRouteGuardService } from '../shared/routeGuard/authentication.service';
import { RoutingResolver } from '../shared/resolver/routing-resolver';
import { EditComponent } from '../edit-component/component/edit.component';

const ROUTE = [
        {
            path: 'home',
            component: SearchComponent
        },
        {
            path: 'details/:id',
            component: DetailsComponent,
            canActivate: [AuthenticationRouteGuardService],
            resolve: { details: RoutingResolver }
        },
        {
            path: 'details/:id/edit',
            component: EditComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: '**',
            redirectTo: 'home'
        }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTE)
    ],
    exports: [RouterModule]
})

export class AppRouterModule {

}
