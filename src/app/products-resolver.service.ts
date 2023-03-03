import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]>{

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {

    return this.productService.getProductDetails()
    .pipe(
      map(
        (x:Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product))
      )
    );
  }
}
