import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class Service {


constructor(
  private http: HttpClient,
) { }

getlist(body){
  return this.http.get('https://api.spaceXdata.com/v3/launches',{params:body});
}
LaunchSuccess(){
  return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
}
Launchland(){
  return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
}
all(){
  return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014');
}

}
