import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './modules/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import { DashboardComponent, AvailabilityPipe } from './components/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ServerComponent } from './components/server/server.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportService } from './services/report/report.service';
import { ClientComponent} from './components/client/client.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { BatchComponent} from './components/batch/batch.component';
import { UnprocessedCandidatesComponent } from './components/unprocessed-candidates/unprocessed-candidates.component';
import { DetailsComponent } from './components/unprocessed-candidates/details/details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RequesitionComponent } from './components/requesition/requesition.component';
import { ReqStatusComponent } from './components/requesition/status/status.component';
import { ReqDetailsComponent } from './components/requesition/details/details.component';
import { BatchService } from './services/batch/batch.service';
import { UnprocessedService } from './services/unprocessed/unprocessed.service';
import { BatchDetailsComponent } from './components/batch/details/details.component';
import { BatchReportComponent } from './components/batch/report/report.component';
import { ResumePartitionsComponent } from './components/batch/resume-partitions/resume-partitions.component';
import { ValidationerrComponent } from './components/batch/validationerr/validationerr.component';
import { MissingNodesComponent } from './components/missing-nodes/missing-nodes.component';
import { BatchOverallComponent, OrderByPipe } from './components/batch/overall/overall.component';
import { TimeLineComponent } from './components/batch/time-line/time-line.component';
import { BatchRequesitionComponent } from './components/batch/batch-requesition/batch-requesition.component';
import { MasterJsonComponent } from './components/missing-nodes/master-json/master-json.component';
import { EpidemicComponent } from './components/epidemic/epidemic.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { EmailNotificationComponent } from './components/batch/email-notification/email-notification.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ServerComponent,
    LoginComponent,
    RegisterComponent,
    ClientComponent,
    AvailabilityPipe,
    ComponentDetailComponent,
    ClientDetailsComponent,
    DeleteDialogComponent,
    UpdateClientComponent,
    BatchComponent,
    BatchDetailsComponent,
    UnprocessedCandidatesComponent,
    DetailsComponent,
    SpinnerComponent,
    RequesitionComponent,
    ReqStatusComponent,
    ReqDetailsComponent,
    BatchReportComponent,
    ResumePartitionsComponent,
    ValidationerrComponent,
    MissingNodesComponent,
    BatchOverallComponent,
    OrderByPipe,
    TimeLineComponent,
    BatchRequesitionComponent,
    MasterJsonComponent,
    EpidemicComponent,
    DiseasesComponent,
    PiechartComponent,
    EmailNotificationComponent
  ],
  entryComponents: [
    DeleteDialogComponent,
    UpdateClientComponent,
    ResumePartitionsComponent,
    ValidationerrComponent,
    TimeLineComponent,
    MasterJsonComponent,
    DiseasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    ReportService,
    BatchService,
    UnprocessedService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
