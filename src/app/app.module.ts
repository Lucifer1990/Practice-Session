import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharecterListComponent } from '../app/charecter-list-component/component/charecter-list.component';
import { SearchComponent } from '../app/search-component/component/search-component';
import { ByTen } from '../app/shared/pipe/byTen.pipe';
import { CharecterListService } from '../app/charecter-list-component/service/charecter-list.service';
import { RoutingResolver } from '../app/shared/resolver/routing-resolver';
import { SharedService } from '../app/shared/service/shared-service.service';
import { DetailsComponent } from '../app/details-component/component/details.component';
import { AuthenticationRouteGuardService } from './shared/routeGuard/authentication.service';
import { SpinnerComponent } from './spinner-component/spinner.component';
import { EditComponent } from './edit-component/component/edit.component';
import { ChildRoutePosterComponent } from './poster-component/poster.component';
import { ChildRouteOtherdetailsComponent } from './other-details-component/other-details.component';

import { AppRouterModule } from './feature-module/router.module';

@NgModule({
  declarations:
  [
    AppComponent,
    CharecterListComponent,
    ByTen,
    SearchComponent,
    DetailsComponent,
    SpinnerComponent,
    EditComponent,
    ChildRoutePosterComponent,
    ChildRouteOtherdetailsComponent
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
],
  bootstrap: [AppComponent],
  providers: [
    CharecterListService,
    RoutingResolver,
    SharedService,
    AuthenticationRouteGuardService]
})
export class AppModule { }
