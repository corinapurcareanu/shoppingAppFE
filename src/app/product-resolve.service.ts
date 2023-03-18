import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product>{

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get("productId");
    ("id este:" + id);
    if(id) {
      return this.productService.getProductDetailsById(parseInt(id))
      .pipe(
        map(p => this.imageProcessingService.createImages(p))
      );
    } else {
      return of(this.getProductDetails());
    }
  }

  getProductDetails() {
    return {
      id: null,
      productName: "",
      productDescription: "",
      productDiscountedPrice: 0,
      productActualPrice: 0,
      deliveryDays: 2,
      productStock: 20,
      productImages: [],
      type: ""
    }
  }
}
