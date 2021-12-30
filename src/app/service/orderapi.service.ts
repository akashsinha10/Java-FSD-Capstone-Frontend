import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  private url:string = "http://localhost:8083/api/ver2/order";
  constructor(private httpClient : HttpClient) { }
  
  public getOrders(){
    return this.httpClient.get(this.url+"/getordersdata");
  }

  public getOrder(id : number){
    return this.httpClient.get(`${this.url}/getorder/${id}`);
  }

  public addOrder(order : any){
    return this.httpClient.post(this.url+"/addorder", order);
  }

  public updateOrder(order : any, id : number){
    return this.httpClient.put(`${this.url}/updateorder/${id}`,order);
  }

  public deleteOrder(id : number){
    return this.httpClient.delete(`${this.url}/deleteorder/${id}`);
  }
}
