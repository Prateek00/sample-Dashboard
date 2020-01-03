import { Component, OnInit, Inject } from '@angular/core';
import { BatchDetails } from 'src/app/models/batch-details';
import { BatchService } from 'src/app/services/batch/batch.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-batch-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class BatchReportComponent implements OnInit {

  public isFetching: boolean = true;
  public barChartLabels: string[] = [];
  public barChartLegend = false;
  public barChartType = 'bar';
  public barChartData = [
    {data: [], label: ''}
  ];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Execution duration in seconds',
          fontSize: 15,
          fontColor: "rgb(23, 80, 185)"
        },
        ticks: {
          min: 0,
          autoSkip: false}
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Process names',
          fontSize: 15,
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
       backgroundColor: [],
       borderColor: 'black',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<BatchReportComponent>,
    @Inject(MAT_DIALOG_DATA) public batchDetails: BatchDetails,
    private batchService: BatchService,
  ) { }

  /**
   * 
   */
  ngOnInit() {
    
      this.batchService.getBatchDetailsById(this.batchDetails)
      .subscribe(
        (data: any) => { this.processData(data); },
        (error) => { console.log(error); }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  /**
   * 
   * @param data 
   */
  processData( data: any ){

    for(let item in data['Data']['performanceReport']){
        
        if( item != 'inputFileTypesAndCount' 
            && item != 'overAll_matchScore' 
            && item != 'SuccessScorePipeline'
            && item != 'MatchScorePipeline'
            && item != "ValidationErrors"
            ){
           
            let status: string = data['Data']['performanceReport'][item]['status'];
            let duration_InSec = data['Data']['performanceReport'][item]['duration_InSec'];

            if( !duration_InSec || duration_InSec === '0'){
              console.log(duration_InSec);
              this.barChartLabels.push(`*${status}-${item}`);
              this.barChartData[0].data.push(0);
            }else{
              this.barChartLabels.push(`${status}-${item}`);
              this.barChartData[0].data.push(Math.abs(duration_InSec));
            }
            
            let color: string = "";
           

            if(status === "COMPLETED"){
                color = "green";
            }else if(status === "FAILED"){
              color = "red";
            }else{
              color = "skyblue";
            }

            this.barChartColors[0].backgroundColor.push(color);
        }
        
    }this.isFetching = false;
  }

}
