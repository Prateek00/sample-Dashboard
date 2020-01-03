import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { BatchDetails } from 'src/app/models/batch-details';
import { BatchService } from 'src/app/services/batch/batch.service';
import { Sort, MatDialog, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-validationerr',
  templateUrl: './validationerr.component.html',
  styleUrls: ['./validationerr.component.scss']
})
export class ValidationerrComponent implements OnInit {
  displayedColumns: string[] = ['Errors', 'JobId', 'PersonId'];
  data: any = [];
  isFetching: boolean = true;
  dataSource: MatTableDataSource<any>;

  constructor(
    public dialogRef: MatDialogRef<ValidationerrComponent>,
    @Inject(MAT_DIALOG_DATA) public batchDetails: BatchDetails,
    private BatchDetailsSvc: BatchService
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.BatchDetailsSvc.getValidationErrorsDetailsById(this.batchDetails)
    .subscribe(
      (data: any) => {
        this.isFetching =  false;
        this.data = data[0].Data.performanceReport.ValidationErrors;
        this.dataSource = new MatTableDataSource(this.data);
            //console.log(this.dataSource);
        this.dataSource.sort =  this.sort;
      },
      (error) => { 
        this.isFetching =  false;
          console.log(error);
        }
      )
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
