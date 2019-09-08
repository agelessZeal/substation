import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/pages/home/home.component';
import {ImpressumComponent} from './modules/pages/impressum/impressum.component';
import {TermsComponent} from './modules/pages/terms/terms.component';
import {DisclaimerComponent} from './modules/pages/disclaimer/disclaimer.component';
import {CustomerServiceComponent} from './modules/pages/customer-service/customer-service.component';
import {QuestionAnswerComponent} from './modules/pages/question-answer/question-answer.component';
import {PolicyComponent} from './modules/pages/policy/policy.component';
import {MoreInfoComponent} from './modules/pages/more-info/more-info.component';

const routes: Routes = [
    {path: 'app/more-info', component: MoreInfoComponent},
    {path: 'app/privacy-policy', component: PolicyComponent},
    {path: 'app/impressum', component: ImpressumComponent},
    {path: 'app/terms-of-use', component: TermsComponent},
    {path: 'app/disclaimer', component: DisclaimerComponent},
    {path: 'app/customer-service', component: CustomerServiceComponent},
    {path: 'app/question-answers', component: QuestionAnswerComponent},
    {path: 'app/home', component: HomeComponent},
    {path: '', redirectTo: '/app/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
