import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/services/report/report.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MatTableDataSource} from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['atsCode', 'atsName', 'clientName', 'iwrClientCode', 'dateCreatedOn', 'actions'];
  dataSource: MatTableDataSource<any>;
  downloadJsonHref;
  isFetching: boolean = true;

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private report: ReportService,
    private router: Router,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
      this.getClients();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  getClients(){
    this.report.getClients().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort =  this.sort;
        // this.convertJsonToCsv(this.displayedColumns, this.dataSource);
        this.isFetching = false;
      },
      err =>{ 
        console.log(err);
        this.isFetching = false;
      }
    );
  }

  // getClientDetails(id: string){
  //     this.router.navigate(['/client', id]);
      
  // }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(ClientDetailsComponent, {
      width:'60vw',
      height:'auto',
      data:id,
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
   }

  
  // on click a downloable excel file available
  exportAsExcel(){
    
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
      for(i = 0; i < n; i++){
          this.str += data[i].Data.Client.atsCode;
          this.str += ',';
          this.str += data[i].Data.Client.atsName;
          this.str += ',';
          this.str += data[i].Data.Client.clientName;
          this.str += ',';
          this.str += data[i].Data.Client.iwrClientCode;
          this.str += ',';
          this.str += `\"${data[i].Data.Client.dateCreatedOn}\"`;
          this.str += '\n';
      }
      // downloadble file url
      let uri = this.sanitizer.bypassSecurityTrustUrl("data:text/csv;charset=UTF-8," + encodeURIComponent(this.str));
      this.downloadJsonHref = uri;
  }
  
  // delete a Client from database
  deleteClient(client){
    
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // call delete client service
      if(result) {
        this.report.deleteClient(client._id, client._rev)
        .subscribe(
          (res) => {
            this.getClients();
            alert('sucessfully deleted')
          },
          err => alert('unable to delete')
        );
      }
    });
  }

  // update client data 
  updateClient(client){
    
    const dialogRef = this.dialog.open(UpdateClientComponent, {
      width: '250px',
      data: client
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
          this.report.updateClient(result)    
          .subscribe(
            (res) => {
              this.getClients();
              alert('client details updated')
            },
            err => alert('unable to update')
          );
      }
    });
  }

}
