import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Content-Type': 'text/plain',
    //'Access-Control-Allow-Origin': '*'
  })
}


const httpOptions1 = {
  headers: new HttpHeaders({
    //'Content-Type': 'application/json',
    'Content-Type': 'text/plain',
    //'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }
  
  runTests(){
    return this.http.get('assets/sample.json', httpOptions);
  }

  viewDetails(name: string){
    let path: string = `assets/components/${'Textkernel'}.json`;
    return this.http.get(path, httpOptions);
  }
  
  baseUrl: string = "http://localhost:9080"; // http://localhost:9080


  // client service
  getClients(){
    let path: string = `assets/clients.json`;
    return this.http.get(`${this.baseUrl}/iwr-server/api/clients`, httpOptions);
  }

  getClientDetails(_id: string){
    let path: string = `assets/clients/${'Ibm'}.json`;
    return this.http.get(`${this.baseUrl}/iwr-server/api/clients/${_id}`, httpOptions);
  }

  deleteClient(_id, _rev){
    return this.http.delete(`api/clients/${_id}/${_rev}`, httpOptions);
  }

  updateClient(client){
    return this.http.put(`api/clients`, client, httpOptions);
  }

  getMasterJSON(){
    return this.http.get(`${this.baseUrl}/iwr-server/api/iwrAdmin/masterJSON`, httpOptions);
  }

  getMasterJSONPath(){
    return this.http.get(`${this.baseUrl}/iwr-server/api/iwrAdmin/masterJSONPath`, httpOptions);
  }

  getDemographicArea() {
   
      return this.http.get(`${this.baseUrl}/iwr-server/api/iwrAdmin/demography`,httpOptions);
  }
   
  getPopulationDistro(data:any) {
    return this.http.post(`${this.baseUrl}/iwr-server/api/iwrAdmin/distro`,data, httpOptions1);
  }

}
