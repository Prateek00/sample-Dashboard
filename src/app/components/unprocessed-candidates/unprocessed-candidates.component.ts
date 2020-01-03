import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { UnprocessedService } from 'src/app/services/unprocessed/unprocessed.service';


@Component({
  selector: 'app-unprocessed-candidates',
  templateUrl: './unprocessed-candidates.component.html',
  styleUrls: ['./unprocessed-candidates.component.scss']
})
export class UnprocessedCandidatesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'unprocessed', 'actions'];
  dataSource;
  isFetching: boolean = true;
  clients: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;


  constructor(
    private router: Router,
    private unprocessed: UnprocessedService
  ) { }

  ngOnInit() {
    this.serversData = [0, 0, 0, 0, 0, 0, 0];
    this.getUnprocessedDetails();
  }

  switchPage(event: PageEvent) {

  }

  getUnprocessedDetails() {
    this.unprocessed.getUnprocessedDetails()
      .subscribe(
        (data: any) => {
          this.isFetching = false;
          this.clients = this.custimize(data);
          this.dataSource = new MatTableDataSource(this.clients.filter(
            (v: any)=>{ if(v.unprocessed !== 0) return v; }));
          
          
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

        },
        (error) => { console.log(error); }
      );
  }

  custimize(data): any {
    let output = [];
    for (let x in data) {
        let temp = this.convertToList(data[x]).length;
        output.push({ name: x, unprocessed: temp })
    }

    output.sort((x, y) => y.unprocessed - x.unprocessed);
    return output;
  }

  convertToList(data) {
   if(data === [] || data === undefined){
      return null
   }

    let output: any = [];
    for (let item in data) {
      output.push({ date: item, details: data[item] });
    }

    let results: any = [];
    let item: any;
    for (item of output) {
      let result: any = {};
      let details: any = item.details;
      result.date = this.nullCheck(item.date);
      result.personId = this.nullCheck(details[0]);
      result.personIwrCode = this.nullCheck(details[1]);
      result.requisitionId = this.nullCheck(details[2]);
      result.batchId = this.nullCheck(details[3]);
      result.sessionId = this.nullCheck(details[4]);
      result.TK = this.nullCheck(details[5].TK);
      result.NLC = this.nullCheck(details[5].NLC);
      result.MatchScore = this.nullCheck(details[5].MatchScore);
      result.ATSPublish = this.nullCheck(details[5].ATSPublish);
      result.Standardization = this.nullCheck(details[5].Standardization);
      result.SuccessScore = this.nullCheck(details[5].SuccessScore);
      result.ReqState = this.nullCheck(details[5].ReqState);
      results.push(result);

    }
    this.getDataForCharts(results);
    return results;
  }

  nullCheck(data: any): any {
    if (data === "" || data === undefined) {
      return "Unavailable";
    }
    return data;
  }


  serversData: number[] = [0, 0, 0, 0, 0, 0, 0];
  serversNames: string[] = ['TK', 'NLC', 'MatchScore', 'ATSPublish', 'Standardization', 'SuccessScore', 'ReqState'];
  serversChartType: string = "pie";
  serversChartOptions = [{
    responsive: true
  }];
  getDataForCharts(data) {
    for (let item of data) {
      if (item.TK !== "SUCCESS") {
        this.serversData[0] += 1;
      }

      if (item.NLC !== "SUCCESS") {
        this.serversData[1] += 1;
      }

      if (item.MatchScore !== "SUCCESS") {
        
        this.serversData[2] += 1;
        console.log(`${data} : this.serversData[2]`);
      }

      if (item.ATSPublish !== "SUCCESS") {
        this.serversData[3] += 1;
      }

      if (item.Standardization !== "SUCCESS") {
        this.serversData[4] += 1;
      }

      if (item.SuccessScore !== "SUCCESS") {
        this.serversData[5] += 1;
      }

      if (item.ReqState !== "SUCCESS") {
        this.serversData[6] += 1;
      }
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  getClientDetails(id: string) {
    this.router.navigate(['/unprocessed', id]);
  }

}
