import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BatchDetails } from 'src/app/models/batch-details';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }
  baseUrl: string = ""; // http://localhost:9080

  //get client details 
  getAllBatchStatus(data: any){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/status`, data, httpOptions);
  }
  
  getBatchDetailsByStatus(data: BatchDetails){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/reports`, data, httpOptions);
  }

  getBatchDetailsById(data: BatchDetails){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/details`, data, httpOptions);
  }

  getValidationErrorsDetailsById(data: BatchDetails){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/validationErrors`, data, httpOptions);
  }

  getResumePartitionDetails(data: BatchDetails){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/resumePartitions`, data, httpOptions);
  }
  
  getMissingNodes(){
    return this.http.get(`${this.baseUrl}/iwr-server/api/iwrAdmin/missingNodes`, httpOptions);
  }

  getRecentBatchStatus(data){
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/recent`, data, httpOptions);
  }

  getbatchRequesitions(data) {
    return this.http.post(`${this.baseUrl}/iwr-server/api/batchs/requesition`, data, httpOptions);
  }

}

