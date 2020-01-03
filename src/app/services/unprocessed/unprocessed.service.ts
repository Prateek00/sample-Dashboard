import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UnprocessedService {

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  baseUrl: string = ""; // http://localhost:9080
  //get client details
  getClientDetails(id: string){
    return this.http.get(`${this.baseUrl}/iwr-server/api/unprocessed/${id}`, httpOptions);
  }
  //get all client names
  getClientNames(){
    return this.http.get(`${this.baseUrl}/iwr-server/api/iwrAdmin/names`, httpOptions);
  }
  //get client details with sort orde r
  getUnprocessedDetails(){
    return this.http.get(`${this.baseUrl}/iwr-server/api/unprocessed`, httpOptions);
  }
}
