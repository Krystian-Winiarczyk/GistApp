import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GistsComponent} from './components/gists/gists.component';
import {AddGistComponent} from './components/add-gist/add-gist.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {GistComponent} from './components/gists/gist/gist.component';
import {GistDetailsComponent} from './components/gist-details/gist-details.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {path: '', component: GistsComponent},
  {path: 'add-gist', component: AddGistComponent},
  {path: 'gist/:gist_id', component: GistDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GistsComponent,
    AddGistComponent,
    GistComponent,
    GistDetailsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule,
        RouterModule.forRoot(routes),
        FormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
