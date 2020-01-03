import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-requesition-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class ReqDetailsComponent implements OnInit {
  
  displayedColumns: string[] = [
    "ClientName",
  "requisitionId",	
  "reqDisplayId",	
  "jobCode",	
  "location",	
  "targetSLA",	
  "jobFamilyCode",
  "jobTitle",	
  "totalPositions",	
  "dateOpen",	
  "status",	
  "numApplied",	
  "numQualified",	
  "overallComplexityScore",	
  "overallPriorityScore",	
  "dateUpdatedOn",	
  "localename"
 ];
  dataSource: MatTableDataSource<any>;
  downloadJsonHref;
  @ViewChild(MatSort) sort: MatSort;

  temp: any = [
    {
      "ClientName" : "ibm",
       "requisitionId" : "276524",	
       "reqDisplayId" : "188348BR",	
       "jobCode" : "Systems Management Specialist",	
       "location" : "India",	
       "targetSLA" : "30",	
       "jobFamilyCode" : "IT",
       "jobTitle" : "Windows Administrator - SME",	
       "totalPositions" : "1",	
       "dateOpen" : "2018-10-25 14:31:49",	
       "status" : "open",	
       "numApplied" : "140",	
       "numQualified" : "0",	
       "overallComplexityScore" : "2",	
       "overallPriorityScore" : "3",	
       "dateUpdatedOn" : "2019-Feb-18 12:42	",	
       "localename" : "en-us", 
      },
      {
        "ClientName" : "ibm",
         "requisitionId" : "276524",	
         "reqDisplayId" : "188348BR",	
         "jobCode" : "Systems Management Specialist",	
         "location" : "India",	
         "targetSLA" : "30",	
         "jobFamilyCode" : "IT",
         "jobTitle" : "Windows Administrator - SME",	
         "totalPositions" : "1",	
         "dateOpen" : "2018-10-25 14:31:49",	
         "status" : "open",	
         "numApplied" : "140",	
         "numQualified" : "0",	
         "overallComplexityScore" : "2",	
         "overallPriorityScore" : "3",	
         "dateUpdatedOn" : "2019-Feb-18 12:42	",	
         "localename" : "en-us", 
        },
        {
          "ClientName" : "ibm",
           "requisitionId" : "276524",	
           "reqDisplayId" : "188348BR",	
           "jobCode" : "Systems Management Specialist",	
           "location" : "India",	
           "targetSLA" : "30",	
           "jobFamilyCode" : "IT",
           "jobTitle" : "Windows Administrator - SME",	
           "totalPositions" : "1",	
           "dateOpen" : "2018-10-25 14:31:49",	
           "status" : "open",	
           "numApplied" : "140",	
           "numQualified" : "0",	
           "overallComplexityScore" : "2",	
           "overallPriorityScore" : "3",	
           "dateUpdatedOn" : "2019-Feb-18 12:42	",	
           "localename" : "en-us", 
          }
      
  ];
  constructor() { }

  ngOnInit() {
    this.dataSource = this.temp;
    this.dataSource.sort =  this.sort;
  }

}
/**
    [
      {
        "ClientName" : "ibm",
         "requisitionId" : "276524",	
         "reqDisplayId" : "188348BR",	
         "jobCode" : "Systems Management Specialist",	
         "location" : "India",	
         "targetSLA" : "30",	
         "jobFamilyCode" : "IT",
         "jobTitle" : "Windows Administrator - SME",	
         "totalPositions" : "1",	
         "dateOpen" : "2018-10-25 14:31:49",	
         "status" : "open",	
         "numApplied" : "140",	
         "numQualified" : "0",	
         "overallComplexityScore" : "2",	
         "overallPriorityScore" : "3",	
         "dateUpdatedOn" : "2019-Feb-18 12:42	",	
         "localename" : "en-us", 
        }
      ]	
      																						
 */
