import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderInput } from 'src/app/_model/order.input.model';
import { Product } from 'src/app/_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PATH_OF_API = "http://localhost:9090"

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  )
  constructor(private httpclient : HttpClient) { }

  public addNewProduct(product: FormData) {
    console.log(this.httpclient.post(this.PATH_OF_API + "/addNewProduct", product))
    return this.httpclient.post(this.PATH_OF_API + "/addNewProduct", product)
  }

  public getAllProducts(number : number, searchkeyword: string ="") {
    console.log("cheia e" + searchkeyword)
    return this.httpclient.get<Product[]>(this.PATH_OF_API + "/getAllProducts?pageNumber=" + number +"&searchKey=" + searchkeyword);
  }

  public deleteProduct(productId: number) {
      return this.httpclient.delete(this.PATH_OF_API + "/deleteProductDetails/" + productId)
  }

  public getProductDetailsById(productId: number) {
    return this.httpclient.get<Product>( this.PATH_OF_API + "/getProductDetailsById/" + productId)
  }

  public getProductDetails() {
    return this.httpclient.get<Product[]>( this.PATH_OF_API + "/getProductDetails")
  }

  public placeOrder(orderInput: any) {
    return this.httpclient.post( this.PATH_OF_API + "/placeOrder", orderInput)
  }

  public addToCart(productId: number | null) {
    return this.httpclient.get( this.PATH_OF_API + "/addToCart/" + productId)
  }

  public getCartDetails() {
    return this.httpclient.get( this.PATH_OF_API + "/getCartDetails")
    
  }

  public deleteCartItem(cartId: number) {
    return this.httpclient.delete( this.PATH_OF_API + "/deleteCartItem/" + cartId);
  }
}
