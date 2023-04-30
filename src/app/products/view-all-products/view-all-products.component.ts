import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productData:any
  filterCategory:any
  searchString:any=''
  constructor(private ps:ProductService){}
  ngOnInit():void{
    this.ps.viewAllProduct().subscribe((data:any)=>{
      this.productData=data;
    })
    this.ps.search.subscribe((data:any)=>{
    this.searchString=data
    })
  }
filter(category:any){
  this.filterCategory=this.productData.filter((i:any)=>i.categoryId==category||category=="")
  }
}
