import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-requesition-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class ReqStatusComponent implements OnInit {

  displayedColumns: string[] = [
    "ClientName",
   "_id",
   "Parsing",
   "CompetenciesEnrichment",
   "SkillsEnrichment",
   "reqLength",
   "batchId",
   "requisitionId",
   "reqDisplayId",
   "sessionId",
   "noOfSkills",
   "isMatchScoreToBeCalculate",
   "locale",
   "updateTimeStamp"];
  dataSource: MatTableDataSource<any>;
  downloadJsonHref;
  @ViewChild(MatSort) sort: MatSort;

  temp: any = [
    {
      "ClientName" : "ibm",
      "_id" : "ibm$Requisition$257671",
      "Parsing" : "SUCCESS",
      "CompetenciesEnrichment" : "SUCCESS",
      "SkillsEnrichment" : "SUCCESS",
      "reqLength" : "3214",
      "batchId" : "16070",
      "requisitionId" : "257671",
      "reqDisplayId" : "171460BR",
      "sessionId" : "2019-Feb-18 13:42:28",
      "noOfSkills" : "22",
      "isMatchScoreToBeCalculate" : "Unavailable",
      "locale" : "en-us",
      "updateTimeStamp" : "2019-02-18 13:45:53"
    },
    {
      "ClientName" : "ibm",
      "_id" : "ibm$Requisition$257671",
      "Parsing" : "SUCCESS",
      "CompetenciesEnrichment" : "SUCCESS",
      "SkillsEnrichment" : "SUCCESS",
      "reqLength" : "3214",
      "batchId" : "16070",
      "requisitionId" : "257671",
      "reqDisplayId" : "171460BR",
      "sessionId" : "2019-Feb-18 13:42:28",
      "noOfSkills" : "22",
      "isMatchScoreToBeCalculate" : "Unavailable",
      "locale" : "en-us",
      "updateTimeStamp" : "2019-02-18 13:45:53"
    },
    {
      "ClientName" : "ibm",
      "_id" : "ibm$Requisition$257671",
      "Parsing" : "SUCCESS",
      "CompetenciesEnrichment" : "SUCCESS",
      "SkillsEnrichment" : "SUCCESS",
      "reqLength" : "3214",
      "batchId" : "16070",
      "requisitionId" : "257671",
      "reqDisplayId" : "171460BR",
      "sessionId" : "2019-Feb-18 13:42:28",
      "noOfSkills" : "22",
      "isMatchScoreToBeCalculate" : "Unavailable",
      "locale" : "en-us",
      "updateTimeStamp" : "2019-02-18 13:45:53"
    }
  ];
  constructor() { }

  ngOnInit() {
    this.dataSource = this.temp;
    this.dataSource.sort =  this.sort;
  }

}
