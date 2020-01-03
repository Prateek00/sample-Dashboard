import { Component, OnInit } from '@angular/core';
import { UnprocessedService } from 'src/app/services/unprocessed/unprocessed.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BatchService } from 'src/app/services/batch/batch.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-batch-requesition',
  templateUrl: './batch-requesition.component.html',
  styleUrls: ['./batch-requesition.component.scss']
})
export class BatchRequesitionComponent implements OnInit {

  selectedClientId: string;
  duration: number = 0.5
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
          //TODO: default the first one
          this.selectedClientId = "commonschema";
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

  generate() {
    this.isFetching = true;
    let recentBatch: any = {
      startTime: "",
      endTime: "",
      clientId: "",
    }

    let endTime = new Date();
    let startTime = new Date(endTime.getTime() - this.duration * (24 * 60 * 60 * 1000));
    recentBatch.clientId = this.selectedClientId;
    recentBatch.startTime = startTime;
    recentBatch.endTime = endTime;
    console.log(recentBatch);
    this.batchService.getbatchRequesitions(recentBatch)
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

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.data = data;
      return;
    }

    this.data = data.sort((a, b) => {
      const isAsc = sort.direction !== 'asc';
      switch (sort.active) {
        case 'batchId': return compare(a.batchId, b.batchId, isAsc);
        case 'APPLICANT_PRIMARY': return compare(a.APPLICANT_PRIMARY, b.APPLICANT_PRIMARY, isAsc);
        case 'REQUISITION_PRIMARY': return compare(a.REQUISITION_PRIMARY, b.REQUISITION_PRIMARY, isAsc);
        default: return 0;

      }
    });

  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
