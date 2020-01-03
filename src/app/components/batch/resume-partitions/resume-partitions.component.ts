import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { BatchDetails } from 'src/app/models/batch-details';
import { BatchService } from 'src/app/services/batch/batch.service';
import { Sort, MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-resume-partitions',
  templateUrl: './resume-partitions.component.html',
  styleUrls: ['./resume-partitions.component.scss']
})
export class ResumePartitionsComponent implements OnInit {
  displayedColumns: string[] = ['Total', 'RDD', 'Machine', 'IP'];
  dataSource: MatTableDataSource<any>;
  isFetching: boolean = true;
  data: any = [];

  constructor(
    public dialogRef: MatDialogRef<ResumePartitionsComponent>,
    @Inject(MAT_DIALOG_DATA) public batchDetails: BatchDetails,
    private BatchDetailsSvc: BatchService
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
     this.BatchDetailsSvc.getResumePartitionDetails(this.batchDetails)
     .subscribe(
        (data: any) => {
          this.data = data;
          this.dataSource = new MatTableDataSource(data);
            //console.log(this.dataSource);
          this.dataSource.sort =  this.sort;
          this.isFetching = false;
        },
        (error) => {
          this.isFetching = false;
          console.log(error);
        }
     )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
