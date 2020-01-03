import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { UnprocessedService } from 'src/app/services/unprocessed/unprocessed.service';
import { BatchService } from 'src/app/services/batch/batch.service';



@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

 transform(input:any, args:string[]) : any {
   for(let property of args){
       input.sort((a, b) => b.property - a.property);
   }
   return input;
 }
}

@Component({
  selector: 'app-batch-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.scss']
})
export class BatchOverallComponent implements OnInit {
  
  selectedClientIds: string[] = [];
  top: number = 10;
  duration: number = 7
  isFetching: boolean = true;
  clientIds: string[] = [];
  filtredClientIds: string[] = [];
  data: any = [];

  constructor(
    private batchService: BatchService,
    private unprocessedService: UnprocessedService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.unprocessedService.getClientNames()
      .subscribe(
        (data: any) => {
          this.clientIds = data;
          this.filtredClientIds = this.clientIds;
          //default top 5
          this.selectedClientIds = this.clientIds.slice(0,5);
          this.generate();
        },
        (error) => { console.log(error); }
      );
  }

  area = new FormControl('', [
    Validators.required,
  ]);

  myForm = this.builder.group({
    area: this.area
  });

  search(query: string) {
    let result: any = this.select(query);
    this.filtredClientIds = result;
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
  
  generate(){
    this.isFetching = true;
    let recentBatch: any = {
      startTime : "",
      endTime: "",
      clientIds : [],
    }

    let endTime = new Date();
    let startTime =  new Date(endTime.getTime() - this.duration * (24 * 60 * 60 * 1000));
    recentBatch.clientIds = this.selectedClientIds;
    recentBatch.startTime = startTime;
    recentBatch.endTime = endTime;
    console.log(recentBatch);
    this.batchService.getRecentBatchStatus(recentBatch)
    .subscribe(
      (data: any) => {
         this.data = data;
         this.isFetching = false;
      },
      (error) => { 
        console.log(error);
        this.isFetching = false;
      }
    )
    
  }
}
/*
     {
   "selector": {
      "_id": {
         "$gt": "0"
      },
      "Data.batchPath": {
         "$eq": "current"
      },
      "Data.overAllStartTime": {
         "$gte": "2019-03-009T05:59:53.952Z",
         "$lte": "2019-04-011T05:59:53.952Z"
      }
   },
   "fields": [
      "_id",
      "_rev",
      "Data.batchId"
   ],
   "sort": [
      {
         "_id": "asc"
      }
   ]
}
*/