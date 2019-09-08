import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/pages/home/home.component';
import {ExplorerComponent} from './modules/pages/explorer/explorer.component';

const routes: Routes = [
  {path: 'app/home', component: HomeComponent},
  {path: 'app/explorer', component: ExplorerComponent},
  {path: '', redirectTo: 'app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
