import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppAboutComponent} from '../app-about/app-about.component';
import {AppHistoryComponent} from '../app-history/app-history.component';
import {ContactsListComponent} from '../contacts-list/contacts-list.component';
import {ContactDetailsComponent} from '../contact-details/contact-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'about', component: AppAboutComponent},
  {path: 'history', component: AppHistoryComponent},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'contact-details/:id', component: ContactDetailsComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
