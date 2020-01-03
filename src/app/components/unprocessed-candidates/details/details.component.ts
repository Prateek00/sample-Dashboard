import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { UnprocessedService } from 'src/app/services/unprocessed/unprocessed.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'personId', 'TK', 'NLC', 'MatchScore', 'ATSPublish', 'Standardization', 'SuccessScore', 'ReqState'];
  dataSource;
  temp;
  isFetching: boolean = true;
  client: string;
  downloadJsonHref;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    private route: ActivatedRoute,
    private unprocessedService: UnprocessedService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params['id'];
      this.client = id;
      this.unprocessedService.getClientDetails(id)
      .subscribe(
        (data: any) => { 
          this.isFetching = false;
          this.temp = this.convertToList(data[0]);
          this.dataSource = new MatTableDataSource(this.temp);
          this.dataSource.sort =  this.sort;
          this.dataSource.paginator =  this.paginator;
          this.exportAsExcel();
          //setTimeout(, 6000);
        },
        (error) => { console.log(error); }
      )
    });
    
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  convertToList(data){
     if(data.length === 0){
        return null;
     }

     let output: any = [];
     for(let item in data){
        output.push({ date: item, details: data[item] });
     }
     
     let results: any = [];
     let item: any;
     for(item of output){
          let result: any = {};
          let details: any = item.details;
          result.date = this.nullCheck(item.date);
          result.personId = this.nullCheck(details[0]);
          result.personIwrCode = this.nullCheck(details[1]);
          result.requisitionId = this.nullCheck(details[2]);
          result.batchId = this.nullCheck(details[3]); 
          result.sessionId = this.nullCheck(details[4]);
          result.TK= this.nullCheck(details[5].TK);
          result.NLC = this.nullCheck(details[5].NLC);
          result.MatchScore = this.nullCheck(details[5].MatchScore);
          result.ATSPublish= this.nullCheck(details[5].ATSPublish);
          result.Standardization= this.nullCheck(details[5].Standardization);
          result.SuccessScore= this.nullCheck(details[5].SuccessScore);
          result.ReqState = this.nullCheck(details[5].ReqState);
          results.push(result);
          
     }
     this.getDataForCharts(results);
     return results;
  }

  nullCheck(data: any): any{
       if(  data == null || data == "" ){
         return "Unavailable";
       }
       return data;
  }

  /**
   * pie chart for servers performance
   */

   serversData: number[] = [0, 0, 0, 0, 0, 0, 0];
   serversNames: string[] = ['Text Kenranl', 'NLC', 'MatchScore', 'ATSPublish', 'Standardization', 'SuccessScore', 'ReqState'];
   serversChartType: string = "pie";
   serversChartOptions = [{
    responsive: true
   }];
   getDataForCharts(data){
     
     for(let item of data){
        if(item.TK !== "SUCCESS"){
          this.serversData[0] += 1;
        }
        
        if(item.NLC !== "SUCCESS"){
          this.serversData[1] += 1;
        }

        if(item.MatchScore !== "SUCCESS"){
          this.serversData[2] += 1;
        }

        if(item.ATSPublish !== "SUCCESS"){
          this.serversData[3] += 1;
        }

        if(item.Standardization !== "SUCCESS"){
          this.serversData[4] += 1;
        }

        if(item.SuccessScore !== "SUCCESS"){
          this.serversData[5] += 1;
        }

        if(item.ReqState !== "SUCCESS"){
          this.serversData[6] += 1;
        }
     }
   }

   /**
    * on click a downloable excel file available
    */ 

  
  exportAsExcel(){
    let str: string = '';
    // headers
    let headers = ['date', 'personId', 'personIwrCode', 'requisitionId',
     'batchId', 'sessionId', 'TK', 'NLC', 'MatchScore', 'ATSPublish',
      'Standardization', 'SuccessScore', 'ReqState'];

    str += headers.join();
    str += '\n';

    let n: number = this.temp.length;
    let m: number = headers.length;
   
     for(let i = 0; i < n; i++){
      for(let j = 0; j < m; j++){
        str += `\"${this.temp[i].headers[j]}\",`;
      }
      str += '\n';
    }

    // downloadble file url
    let uri = this.sanitizer.bypassSecurityTrustUrl("data:text/csv;charset=UTF-8," + encodeURIComponent(str));
    this.downloadJsonHref = uri;
  }
}

/**
 
{ 
  "date":"20180917123630901901000000",
  "personId":"iwrdevclient$ApplicantScore$5589926$628078",
  "personIwrCode":"5589926",
  "requisitionId":"1e6c616d-485c-416b-a257-8f8807821c31",
  "batchId":"628078",
  "sessionId":"genwtapi100",
  "TK":"Unavailable",
  "NLC":"Unavailable",
  "MatchScore":"SUCCESS",
  "ATSPublish":"PENDING",
  "Standardization":"Unavailable",
  "SuccessScore":"Unavailable",
  "ReqState":"SUCCESS"
}
 */