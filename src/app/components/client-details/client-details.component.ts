import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report/report.service';
import {DOCUMENT} from "@angular/platform-browser";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public client;
  isFetching: boolean = true;
  private dom: Document;

  constructor(
    public dialogRef:MatDialogRef<ClientDetailsComponent>,
    private route: ActivatedRoute,
    private report: ReportService,
    @Inject(MAT_DIALOG_DATA) public hh: any,
    @Inject(DOCUMENT) dom: Document
    ) { 
      this.dom = dom;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  copyElementText(id) {
    var element = null;
    try {
        element = this.dom.getElementById(id);
        element.select();
        this.dom.execCommand("copy");
    }
    finally {
       this.dom.getSelection().removeAllRanges;
    }
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
      
    //   let id: string = params['id'];

      this.report.getClientDetails(this.hh).subscribe(
        data => {
          this.client = data;
          this.isFetching = false;
        },
        err => {
          console.log(err);
          this.isFetching = false;
        }
      );

    // });
  }

}
