import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-requesition',
  templateUrl: './requesition.component.html',
  styleUrls: ['./requesition.component.scss']
})
export class RequesitionComponent implements OnInit {

  displayedColumns: string[] = ["ClientName",
    "_id",
    "PersonId",
    "PersonIwrCode",
    "requisitionId",
    "reqDisplayId",
    "batchId",
    "sessionId",
    "TK",
    "NLC",
    "Standardization",
    "MatchScore",
    "SuccessScore",
    "ATSPublish",
    "ReqState",
    "MatchScoreValue",
    "SuccessScoreValue",
    "CandidateAddedOn"
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  temp: any = [
    {
      "ClientName" :"ibm",
      "_id" :"ibm$ApplicantScore$1889478$191040",
      "PersonId" :"1889478",
      "PersonIwrCode" :"Unavailable",
      "requisitionId" :"191040",
      "reqDisplayId" :"113059BR",
      "batchId" :"16070",
      "sessionId" :"2019-Feb-18 13:42:28",
      "TK" :"Unavailable",
      "NLC" :"SUCCESS",
      "Standardization" :"SUCCESS",
      "MatchScore" :"STATUS_CHECK_FAILED",
      "SuccessScore" :"NOT REQUIRED",
      "ATSPublish" :"FAILED",
      "ReqState" :"SUCCESS",
      "MatchScoreValue" :"!",
      "SuccessScoreValue" :"Unavailable",
      "CandidateAddedOn" : "2019-Feb-18 13:46"
    },
    {
      "ClientName" :"ibm",
      "_id" :"ibm$ApplicantScore$1889478$191040",
      "PersonId" :"1889478",
      "PersonIwrCode" :"Unavailable",
      "requisitionId" :"191040",
      "reqDisplayId" :"113059BR",
      "batchId" :"16070",
      "sessionId" :"2019-Feb-18 13:42:28",
      "TK" :"Unavailable",
      "NLC" :"SUCCESS",
      "Standardization" :"SUCCESS",
      "MatchScore" :"STATUS_CHECK_FAILED",
      "SuccessScore" :"NOT REQUIRED",
      "ATSPublish" :"FAILED",
      "ReqState" :"SUCCESS",
      "MatchScoreValue" :"!",
      "SuccessScoreValue" :"Unavailable",
      "CandidateAddedOn" : "2019-Feb-18 13:46"
    },
    {
      "ClientName" :"ibm",
      "_id" :"ibm$ApplicantScore$1889478$191040",
      "PersonId" :"1889478",
      "PersonIwrCode" :"Unavailable",
      "requisitionId" :"191040",
      "reqDisplayId" :"113059BR",
      "batchId" :"16070",
      "sessionId" :"2019-Feb-18 13:42:28",
      "TK" :"Unavailable",
      "NLC" :"SUCCESS",
      "Standardization" :"SUCCESS",
      "MatchScore" :"STATUS_CHECK_FAILED",
      "SuccessScore" :"NOT REQUIRED",
      "ATSPublish" :"FAILED",
      "ReqState" :"SUCCESS",
      "MatchScoreValue" :"!",
      "SuccessScoreValue" :"Unavailable",
      "CandidateAddedOn" : "2019-Feb-18 13:46"
    }
  ];
  constructor() { }

  ngOnInit() {
    this.dataSource = this.temp;
    this.dataSource.sort =  this.sort;
  }

}
/*
*/

