import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/pages/home/home.component';
import {SbEventComponent} from './modules/pages/sb-event/sb-event.component';

const routes: Routes = [
    {path: 'app/home', component: HomeComponent},
    {path: 'app/events', component: SbEventComponent},
    {path: '', redirectTo: 'app/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
