import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GistsComponent} from './components/gists/gists.component';
import {AddGistComponent} from './components/add-gist/add-gist.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {GistComponent} from './components/gists/gist/gist.component';
import {GistDetailsComponent} from './components/gist-details/gist-details.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AuthComponent } from './components/auth/auth.component';
import {HttpConfigInterceptor} from './intreceptors/httpconfig.interceptor';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'gists', component: GistsComponent},
  {path: 'gists/:gist_id', component: GistDetailsComponent},
  {path: 'gists/user/:user_name', component: GistsComponent},
  {path: 'add-gist', component: AddGistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GistsComponent,
    AddGistComponent,
    GistComponent,
    GistDetailsComponent,
    AuthComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule,
        RouterModule.forRoot(routes),
        FormsModule,
        FontAwesomeModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
