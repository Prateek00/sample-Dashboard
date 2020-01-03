import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report/report.service';
import {MatDialog } from '@angular/material';
import { DiseasesComponent } from '../diseases/diseases.component';

@Component({
  selector: 'app-epidemic',
  templateUrl: './epidemic.component.html',
  styleUrls: ['./epidemic.component.scss']
})
export class EpidemicComponent implements OnInit {

  general:boolean=true;
  bachhe:boolean=false;
  senior:boolean=false;

  demography:any;
  selected:any;
  distro:any;
  matCard:boolean=false;
  rural:string[]= ['ruralTotal','ruralmale','ruralfemale','ruralChildren','ruralSenior_Citizen'];
  urban:string[]= ['urbanTotal','urbanmale','urbanfemale','urbanChildren','urbanSenior_Citizen'];




  public barChartLabels: string[] = ['Total Population','Male','Female','Children','Senior Citizen'];
  public barChartLegend = true;
  public barChartType = 'bar';
  public barChartData = [
    {data: [], label: 'Rural'},
    {data: [], label: 'Urban'}
  ];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total Population count in each category.',
          fontSize: 20,
          fontColor: "rgb(23, 80, 185)"
        },
        ticks: {
          min: 0,
          autoSkip: false}
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Category',
          fontSize: 20,
          fontColor: "rgb(23, 80, 185)"
        },
        ticks: {
          stepSize: 1,
          min: 0,
          autoSkip: false}
      }]
    }
  };
  public barChartColors= [
    {
       backgroundColor: ['tomato','tomato','tomato','tomato','tomato'],
       borderColor: 'black',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: ['MediumSeaGreen','MediumSeaGreen','MediumSeaGreen','MediumSeaGreen','MediumSeaGreen'],
      borderColor: 'black',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }

  ];


  public pieChartLegend = true;
  serversData: number[] = [1000, 800, 1200, 1500, 2000, 1800];
  serversNames: string[] = ['Cholera', 'Dengue', 'Diarrhea', 'Malaria', 'Leptospirosis', 'hepatitis A and E'];
  serversChartType: string = "pie";
  serversChartOptions = [{
    responsive: true
  }];

  serversDataChildren: number[] = [1000, 1500, 2000, 700, 2100, 1800];
  serversNamesChildren: string[] = ['Chicken Pox (Varicella)', 'Diarrhea', 'Mumps', 'Influenza ', 'Conjunctivitis (Pink-eye)', 'Hepatitis A'];

  serversDataSenior: number[] = [1000, 800, 1200, 1500];
  serversNamesSenior: string[] = ['Bacterial pneumonia', 'Elderly skin infections', 'Gastrointestinal infections', 'Urinary tract infections'];

  constructor(private report: ReportService, public dialog: MatDialog) { }

  children() {
    this.general=false;
    this.bachhe=true;
    this.senior=false;
  }
  
  
  adult() {
    this.general=false;
    this.bachhe=false;
    this.senior=true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiseasesComponent, {
      width:'80vw',
      height:'auto',
      data:this.selected,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   }
  
  ngOnInit() {
    this.report.getDemographicArea().subscribe(
      (data:any) => {
        this.demography = data;
        console.log(data);
      }
    )
  }
  
  generate() {
    this.report.getPopulationDistro(this.selected).subscribe(
     (data:any) => {
      this.distro = data;
      this.matCard=true;
      for(let item in data) {
        if(this.rural.includes(item))
        this.barChartData[0].data.push(data[item]);
        else this.barChartData[1].data.push(data[item]);
      }
      console.log(data);
     } 
    )
  }

}
