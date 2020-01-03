import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource} from '@angular/material';
import { BatchService } from 'src/app/services/batch/batch.service';
import {MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MasterJsonComponent } from './master-json/master-json.component';

@Component({
 selector: 'app-json',
 templateUrl: './missing-nodes.component.html',
 styleUrls: ['./missing-nodes.component.scss']
})
export class MissingNodesComponent implements OnInit {
 displayedColumns: string[] = ['ID','missingNodes','missingNodeValues'];
 isFetching: boolean = true;
 dataSource: MatTableDataSource<any>;
 count:number;
 downloadJsonHref;

 @ViewChild(MatSort) sort: MatSort;

 constructor(private bacthSvc: BatchService,
             public dialog: MatDialog,
             private sanitizer: DomSanitizer,) { }

 ngOnInit() {
   this.getJson();
 }
 applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

getJson() {
 this.bacthSvc.getMissingNodes().subscribe(
   (data:any) => {
     this.count = data.length;
     this.dataSource = new MatTableDataSource(data);
     console.log(this.dataSource);
     this.dataSource.sort =  this.sort;
     //this.convertJsonToCsv(this.displayedColumns, this.dataSource);
     this.isFetching = false;
   },
   err =>{
     console.log(err);
     this.isFetching = false;
   }
 )
}

openDialog(): void {
 const dialogRef = this.dialog.open(MasterJsonComponent, {
   width:'60vw',
   height:'auto',
 });

 dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
   //this.animal = result;
 });
}

// convert json to csv
str: string = '';
convertJsonToCsv(headers: string[], data){
   // headers
   this.str += headers.join();
   this.str += '\n';

   let n: number = data.length;
   let i: number ;
   // rows
   for(i = 0; i < 366; i++){
       this.str += data[i]._id;
       this.str += ',';
       this.str += data[i].nodeMissing
       this.str += ',';
       this.str += data[i].nodeValuesMissing;
       this.str += '\n';
   }
   // downloadble file url
   let uri = this.sanitizer.bypassSecurityTrustUrl("data:text/csv;charset=UTF-8," + encodeURIComponent(this.str));
   this.downloadJsonHref = uri;

}


}