import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchDetails } from 'src/app/models/batch-details';
import { BatchService } from 'src/app/services/batch/batch.service';
import { Sort, MatDialog, MatTableDataSource } from '@angular/material';
import { ValidationerrComponent } from '../validationerr/validationerr.component';
import { ResumePartitionsComponent } from '../resume-partitions/resume-partitions.component';
import { BatchReportComponent } from '../report/report.component';
import { TimeLineComponent } from '../time-line/time-line.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-batch-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class BatchDetailsComponent implements OnInit {
  displayedColumns: string[] = ['BatchId', 'Duration', 'Validation Errors', 'Resume Partition'];
  dataSource: MatTableDataSource<any>;
  batchParams: BatchDetails;
  data: any = [];
  isFetching: boolean = true;
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService,
    public dialog: MatDialog
  ) { }

  /**
   * 
   */

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.batchParams = JSON.parse(decodeURI(params['data']));
      this.batchService.getBatchDetailsByStatus(this.batchParams)
        .subscribe(
          (data: any) => {
            this.dataSource = new MatTableDataSource(data);
            //console.log(this.dataSource);
            this.dataSource.sort =  this.sort;
            this.data = data;
            this.isFetching = false;
          },
          (error) => {
            //console.log(error);   
            this.isFetching = false;
          }
        );
    });
  }


  batchDetails(data: any) { 
    this.batchParams._id = data._id;
    this.batchParams.batchId = data.batchId;
    
    const dialogRef = this.dialog.open(BatchReportComponent, {
      width: '95vw',
      height: 'auto',
      data: this.batchParams
    });
  }

  validationErrors(data: any) {
    this.batchParams._id = data._id;
    this.batchParams.batchId = data.batchId;
    

    const dialogRef = this.dialog.open(ValidationerrComponent, {
      width: '70vw',
      height: 'auto',
      data: this.batchParams
    });
  }
  

  resumePartitions(data: any) {
    data.clientId = this.batchParams.clientId;
    const dialogRef = this.dialog.open(ResumePartitionsComponent, {
      width: '60vw',
      height: 'auto',
      data: data
    });
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
        case 'duration': return compare(a.duration, b.duration, isAsc);
        default: return 0;
        
      }
    });
  }

  timegraph(dataForGraph:any,batchparam:any) {

    const dialogRef = this.dialog.open(TimeLineComponent, {
      width: '60vw',
      height: 'auto',
      data: dataForGraph
    });
 
  }
  

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
