import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './components/server/server.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { BatchComponent } from './components/batch/batch.component';
import { UnprocessedCandidatesComponent } from './components/unprocessed-candidates/unprocessed-candidates.component';
import { DetailsComponent } from './components/unprocessed-candidates/details/details.component';
import { RequesitionComponent } from './components/requesition/requesition.component';
import { BatchDetailsComponent } from './components/batch/details/details.component';
import { BatchReportComponent } from './components/batch/report/report.component';
import { MissingNodesComponent } from './components/missing-nodes/missing-nodes.component';
import { BatchOverallComponent } from './components/batch/overall/overall.component';
import { BatchRequesitionComponent } from './components/batch/batch-requesition/batch-requesition.component';
import { EpidemicComponent } from './components/epidemic/epidemic.component';
import { EmailNotificationComponent } from './components/batch/email-notification/email-notification.component';



const routes: Routes = [
  { path: '', component: BatchComponent },
  // { path: '', component: EpidemicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'servers', component: ServerComponent },
  { path: 'client', component: ClientComponent },
  { path: 'component/:id', component: ComponentDetailComponent },
  { path: 'client/:id', component: ClientDetailsComponent },
  { path: 'batch', component: BatchComponent },
  { path: 'batch/overAll', component: BatchOverallComponent },
  { path: 'batch/:data', component: BatchDetailsComponent },
  { path: 'batch/report/:data', component: BatchReportComponent },
  { path: 'requesition', component: BatchRequesitionComponent },
  { path: 'unprocessed', component: UnprocessedCandidatesComponent },
  { path: 'unprocessed/:id', component: DetailsComponent },
  // { path: 'requesition', component: RequesitionComponent },
  { path: 'missingNodes', component: MissingNodesComponent },
  { path: 'epidemic', component: EpidemicComponent },
  { path: 'email', component: EmailNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})  
export class AppRoutingModule { }
