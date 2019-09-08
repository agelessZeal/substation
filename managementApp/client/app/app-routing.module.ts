import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubstationComponent} from './modules/pages/substation/substation.component';
import {PartnerComponent} from './modules/pages/partner/partner.component';
import {MeasurementsComponent} from './modules/pages/measurements/measurements.component';
import {HomeComponent} from './modules/pages/home/home.component';
import {DeviceTypeComponent} from "./modules/pages/device-type/device-type.component";
import {GlobalSettingComponent} from "./modules/components/global-setting/global-setting.component";
import {VirtualSubstationComponent} from "./modules/pages/virtual-substation/virtual-substation.component";

const routes: Routes = [
  {path: 'app/home', component: HomeComponent},
  {path: 'app/substation', component: SubstationComponent},
  {path: 'app/virtual-substation', component: VirtualSubstationComponent},
  {path: 'app/partner', component: PartnerComponent},
  {path: 'app/measurements', component: MeasurementsComponent},
  {path: 'app/device-types', component: DeviceTypeComponent},
  {path: 'app/global-settings', component: GlobalSettingComponent},
  {path: '', redirectTo: 'app/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
