import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppHistoryRoutingModule} from './app-history/app-history-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
} from '@angular/material';


import {AppComponent} from './app.component';
import {AppAboutComponent} from './app-about/app-about.component';
import {AppHistoryComponent} from './app-history/app-history.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

import {ContactService} from './contact.service';
import {Page1Component} from './app-history/page1/page1.component';
import {Page2Component} from './app-history/page2/page2.component';
import {Page3Component} from './app-history/page3/page3.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AppAboutComponent,
    AppHistoryComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHistoryRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'buckwheats-bliss'),
    AngularFireDatabaseModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
