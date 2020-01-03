import { Component, OnInit } from '@angular/core';
import { BatchDetails } from 'src/app/models/batch-details';
import { BatchService } from 'src/app/services/batch/batch.service';
import { UnprocessedService } from 'src/app/services/unprocessed/unprocessed.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-email-notification',
  templateUrl: './email-notification.component.html',
  styleUrls: ['./email-notification.component.scss']
})
export class EmailNotificationComponent implements OnInit {
  status: BatchDetails = new BatchDetails();
  batchParams: BatchDetails;
  isFetching: boolean = true;
  dtDisable: boolean = true;
  duration: number = 7;
  main: any = {};
  NEW: any = {};
  FAILED: any = {};
  PARTIALLY_COMPLETED: any = {};
  NCP_COMPLETED: any = {};
  NCP_STARTED: any = {};
  clientIds: string[] = [];
  selectedClientIds: string[] = [];

  constructor(
    private batchService: BatchService,
    private unprocessedService: UnprocessedService,
    private router: Router,
    private builder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  area = new FormControl('', [
    Validators.required,
  ]);

  myForm = this.builder.group({
    area: this.area
  });

  search(query: string) {
    let result: any = this.select(query);
    this.selectedClientIds = result;
  }

  select(query: string): string[] {
    let result: string[] = [];
    for (let a of this.clientIds) {
      if (a.toLowerCase().indexOf(query) > -1) {
        result.push(a)
      }
    }
    return result
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.batchParams = JSON.parse(decodeURI(params['data']));
      console.log(this.batchParams);
      
    });


    this.initStatus();
    this.status.clientId = this.batchParams['clientId'];
    this.generate();

    // this.unprocessedService.getClientNames()
    //   .subscribe(
    //     (data: any) => {
    //       this.clientIds = data;
    //       this.selectedClientIds = this.clientIds;

    //       //default first client
    //       //this.status.clientId = this.clientIds[0];
    //       this.status.clientId = "commonschema";
    //       this.generate();
    //     },
    //     (error) => { 
    //       this.isFetching = false;
    //       console.log(error); 
    //     }
    //   );

    
  }



  initStatus() {
    this.duration = 1;
    this.setTimeRange(this.duration);
    this.status.customDuration = 2;
  }


  generate() {
    
    this.isFetching = true;
    this.batchService.getAllBatchStatus(this.batchParams)
      .subscribe(
        (data: any) => {
          this.isFetching = false;
          this.main = data.statusAggregation;
          this.NEW = data.breakByStatus.NEW;
          this.FAILED = data.breakByStatus.NCP_FAILED;
          this.NCP_COMPLETED = data.breakByStatus.NCP_COMPLETED;
          this.PARTIALLY_COMPLETED = data.breakByStatus.COMPLETED_WITH_WARNINGS;
          this.NCP_STARTED = data.breakByStatus.NCP_STARTED;
        },
        (error) => {
          this.isFetching = false;
          console.log(error);
        }
      );  
  }


  
  getDetails(statusCode: string, duration: number) {
    this.status.statusCode = statusCode;
    this.status.customDuration = duration;
    console.log(this.status);
    this.router.navigate(['/batch', JSON.stringify(this.status)], { skipLocationChange: true });
  }

  

  setTimeRange(duration) {

    if (+duration === -1) {
      this.dtDisable = false;
      return;
    } else {
      this.dtDisable = true;
    }

    let curTime: Date = new Date();
    let endTime: Date = new Date(curTime.getTime() - duration * (24 * 60 * 60 * 1000));
    this.status.startTime = endTime;
    this.status.endTime = curTime;
  }
}
