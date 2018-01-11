import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharecterListComponent } from '../app/charecter-list-component/component/charecter-list.component';
import { SearchComponent } from '../app/search-component/component/search-component';
import { ByTen } from '../app/shared/pipe/byTen.pipe';
import { CharecterListService } from '../app/charecter-list-component/service/charecter-list.service';
import { RoutingResolver } from '../app/shared/resolver/routing-resolver';
import { SharedService } from '../app/shared/service/shared-service.service';
import { DetailsComponent } from '../app/details-component/component/details.component';

@NgModule({
  declarations:
  [
    AppComponent,
    CharecterListComponent,
    ByTen,
    SearchComponent,
    DetailsComponent
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: SearchComponent},
      {path: 'details/:id', component: DetailsComponent, resolve: {details: RoutingResolver}},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/home'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
    CharecterListService,
    RoutingResolver,
    SharedService]
})
export class AppModule { }
