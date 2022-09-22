import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  product:any[] =[];
  category :any[]=[]
  loading :boolean= false;
  cartproducts:any = []


  constructor(private service:ProductsService) {
    
   }

  ngOnInit(): void {
    this.getproducts();
    this.getCateeories();
  }
  getproducts(){
    this.loading=true;
    this.service.getAllproducts().subscribe((res:any)=>{
      this.product=res 
      this.loading=false
      
  } , (error=>alert('error')))
}
getCateeories(){
  this.loading=true;
  this.service.getAllCatergories().subscribe((res:any)=>{
    this.category=res
    this.loading=false;
} , (error=>{ this.loading=false; alert('error')}))
}
fillterCategory(event:any){
let value = event.target.value
if (value=='all'){
  this.getproducts()
}
else{
this.getproductsCategory(value)}
}
getproductsCategory(keyWord:string){
  this.loading=true;
this.service.getProductByCategory(keyWord).subscribe((res:any)=>this.product=res ) ;
this.loading=false;
}

addtocart(event:any){
  //JSON.stringify() //send data
  //JSON.parse()     //recive data
  if ("cart" in localStorage){
    this.cartproducts = JSON.parse(localStorage.getItem("cart")!);
    
    let exist = this.cartproducts.find((item:any)=>item.item.id==event.item.id)
    if(exist){
      alert("this item is existed")
    }else{
      this.cartproducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    }
  
  }
  else{
    this.cartproducts.push(event);
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))

  }

 
 
}

}
