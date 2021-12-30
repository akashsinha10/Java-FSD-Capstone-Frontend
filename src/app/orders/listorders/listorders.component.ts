import { Component, OnInit } from '@angular/core';
import { OrderapiService } from 'src/app/service/orderapi.service';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {
  public orders : any[] = [];
  constructor(private orderapiService : OrderapiService) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    console.log(username);
    if(username != null){
      this.orderapiService.getOrders().subscribe((res) => {
        let orderArray = Object.values(res);
        for(let o in orderArray){
          if(orderArray[o]["user"]["username"] == username){
            this.orders.push(orderArray[o]);
            console.log(this.orders);
            break;
          }
        }
      },
      (error) => {
        console.log(error);
      });
    }
  }
}
