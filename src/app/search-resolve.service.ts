import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolveService implements Resolve<String>{

  constructor(private productService: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): String {
    const key = route.paramMap.get("searchkeyword");
    (key);
    
    return key !== null ? key : "";
  }

}
