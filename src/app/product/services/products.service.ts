import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  getAllproducts() {
    
    return this.http.get(environment.baseApi+'products')
  }
  getAllCatergories(){
    return this.http.get(environment.baseApi+'products/categories')
  }

  getProductByCategory(keyWord:string){
    return this.http.get(environment.baseApi+'products/category/'+keyWord)
  }

  getproductbyid(id:any){
    return this.http.get(environment.baseApi+'products/'+id)

  }
  

}
