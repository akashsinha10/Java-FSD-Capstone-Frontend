import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from '../service/productapi.service';

@Component({
  selector: 'app-cuisinesdata',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  public cuisines : any;
  public searchText :string;
  public categoryName : string;
  constructor(private router : Router, private productapiService : ProductapiService) {
    this.searchText ="";
   }

  ngOnInit(): void {
    this.productapiService.getproductsdata(this.searchText).subscribe((res) => {
      const cusArray = Object.values(res);
      let cus : any[] = [];
      for(let c in cusArray){
        if(!(cus.includes(cusArray[c]))){
          cus.push(cusArray[c]);
        }
      }
      this.cuisines = cus;
    },
    (error) => {
      console.log(error);
    });
  }
  exploreClick(category : string){
    console.log("send category");
    this.categoryName = category;
    console.log(this.categoryName);
    this.router.navigateByUrl(`/products?category=${this.categoryName}`)
  }

}
