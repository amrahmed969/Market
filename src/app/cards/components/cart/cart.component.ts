import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartproducts:any[]=[]
  total:any=0

  success:boolean=false


  constructor(private service:CartsService) { }

  ngOnInit(): void {
    this.getCartproducts()
    
    
  }
  getCartproducts(){ 
    if ("cart" in localStorage){
    this.cartproducts = JSON.parse(localStorage.getItem("cart")!);}
    this.getCarttotal() 
    }
    getCarttotal(){
      this.total=0;
      for(let x in this.cartproducts)
      {
        this.total +=  (this.cartproducts[x].item.price * this.cartproducts[x].quantity)            
      } 
         
    }

    minsamount(index:number){
      this.cartproducts[index].quantity--
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.getCarttotal() 

    }
    addamount(index:number){
      this.cartproducts[index].quantity++
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.getCarttotal() 
    }

    detectchang(){
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.getCarttotal()
    }
    deleteproduct(index:number){
      this.cartproducts.splice(index , 1)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.getCarttotal()
    }
    cleardata(){
      this.cartproducts=[]
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.getCarttotal()
    }

    addcartapi(){
      let products = this.cartproducts.map(item=>{
       return {productId:item.item.id , quantity:item.quantity}
      }) 
      let model={
        userId:5,
        date: new Date(),
       products:products             
      }


      this.service.creatnewcard(model).subscribe(res=>{})
      this.success=true;


      console.log(model);

    }

    

}
