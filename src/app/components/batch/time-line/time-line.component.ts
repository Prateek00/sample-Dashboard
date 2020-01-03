import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  isFetching : boolean = false;
 constructor(public dialogRef: MatDialogRef<TimeLineComponent>,
   @Inject(MAT_DIALOG_DATA) public timeGraphData: any) { }

 ngOnInit() {
   this.barChartData = this.timeLineGraph(this.timeGraphData);
   //console.log(this.timeGraphData);
   this.isFetching = false;
 }

 

 timeLineGraph(data: any){
   let output: any = [];
   //let color: string = 'skyblue';
   //let code: string = this.batchParams.statusCode;
   let count: number = 0;
   //color = this.getColor(code);

   for(let item of data){
      count += 1;
      this.barChartLabels.push(item.overAllStartTime);
      this.barChartLabels.push(item.overallEndTime);
      let entity: any = {data:[]};
      let point1: any = {};
      let point2: any = {};
      point1.x = item.overAllStartTime;
      point1.y = count;
      point1.z = item.batchId;
      entity.data.push(point1);

      point2.x = item.overallEndTime;
      point2.y = count;
      point2.z = item.batchId;
      entity.data.push(point2);


      entity.fill =  false;
      //entity.borderColor = color;
      output.push(entity);
   }
   this.barChartLabels.sort();
   return output;

}

 public barChartLabels: string[] = [];
 public barChartLegend = false;
 public barChartType = 'line';
 public barChartData: any = [];
 public barChartOptions:any = {
   tooltips: {
     enabled: true,
     mode: 'single',
     hitRadius: 2,
     callbacks: {
         label: function(tooltipItems, data) {

            let multistringText = [tooltipItems.yLabel];
            let idx = tooltipItems.yLabel - 1;
            multistringText.push(data.datasets[idx].data[0].z);
             return multistringText;
         }
     }
   },
   scaleShowVerticalLines: false,
   responsive: true,
   scales: {
     yAxes: [{
       scaleLabel: {
         display: true,
         labelString: 'Batch ids',
         fontSize: 15,
         fontColor: "rgb(23, 80, 185)"
       },
       ticks: {
         min: 0,
         stepSize: 2,
         autoSkip: false}
     }],
     xAxes: [{
       scaleLabel: {
         display: true,
         labelString: 'over all time',
         fontSize: 15,
         fontColor: "rgb(23, 80, 185)"
       },
       ticks: {
         stepSize: 0.5,
         min: 0,
         autoSkip: false}
     }]
   }
 };

 onNoClick(): void {
   this.dialogRef.close();
 }

}
