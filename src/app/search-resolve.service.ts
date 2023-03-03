import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolveService implements Resolve<Product[]>{

  constructor(private productService: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    const key = route.paramMap.get("searchkeyword");
    console.log("key este:" + key);

    if(key) {
      return this.productService.getAllProducts(0, key);
    } else {
      return this.productService.getAllProducts(0); //sa afiseze altcv sau home
    }
  }

}
