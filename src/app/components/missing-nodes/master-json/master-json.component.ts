import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReportService } from 'src/app/services/report/report.service';
import {DOCUMENT} from "@angular/platform-browser";

@Component({
 selector: 'app-master-json',
 templateUrl: './master-json.component.html',
 styleUrls: ['./master-json.component.scss']
})
export class MasterJsonComponent implements OnInit {
 public masterJSON:any;
 public isFetching:any = true;
 private dom: Document;
 masterJSONPath:any;


 constructor(public dialogRef: MatDialogRef<MasterJsonComponent>,
             public report:ReportService,
             @Inject(DOCUMENT) dom: Document) {
               this.dom = dom;
             }

 ngOnInit() {
   this.report.getMasterJSON().subscribe(
     (data:any) => {
       this.masterJSON = data;
     }
   )
   this.report.getMasterJSONPath().subscribe(
     (data:any) => {
       this.masterJSONPath = data;
     }
   )
   this.isFetching = false;
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

 onNoClick(): void {
   this.dialogRef.close();
 }


}