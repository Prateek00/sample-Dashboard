import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ReportService } from 'src/app/services/report/report.service';
import { Router } from '@angular/router';

/**
 * custom filter for availble servers 
 * in the component
 */ 
@Pipe({
  name: 'availability',
  pure: false
})
export class AvailabilityPipe implements PipeTransform {
  transform(statuses: string[]): number{
      return statuses.filter( status => status === "AVAILABLE").length;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public overallStatus;
  public servers;
  value = 100;
  

  constructor(
    private report: ReportService,
    private router: Router
    ){ }

  ngOnInit() {
    this.runTests();
  }
  
  // get status of all the servers
  runTests(){
      this.report.runTests().subscribe(
        (data: any) => {
          this.overallStatus = data.IWRStatus;
          this.servers = data.ComponentsStatus;
        },
        error => { console.log(error); }
      );
  }
  // get particular server details
  viewDetails(component){
    this.router.navigate(['/component', component]);
  }
}
