import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppHistoryComponent} from './app-history.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';

const historyRoutes: Routes = [
  {
    path: 'history', component: AppHistoryComponent,
    children: [
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      {path: 'page3', component: Page3Component},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(historyRoutes)
  ],
  exports: [RouterModule]
})
export class AppHistoryRoutingModule {
}
