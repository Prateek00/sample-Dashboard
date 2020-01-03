import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // weekly analysis
  public barChartData = [
    {data: [10, 8, 12, 9, 12, 7, 6], label: 'Available'},
    {data: [2, 4, 0, 3, 0, 5, 6], label: 'Not Available'}
  ];
  public barChartLabels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  public barChartOptions = [{
    responsive: true
  }];
  public barChartColors= [
    {
       backgroundColor: '#49DE28',
       borderColor: 'black',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#FA452C',
      borderColor: 'black',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }
  ];
  public barChartLegend = true;
  public barChartType = 'bar';

  // montly 
  public barChartDataMonthly= [
    {data: [10, 8, 12, 9, 12, 7, 6, 12, 12, 12, 11, 9], label: 'Available'},
    {data: [2, 4, 0, 3, 0, 5, 6, 0, 0, 0, 1, 3], label: 'Not Available'}
  ];
  public barChartLabelsMonthly = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October", "November", "December", ];


}
