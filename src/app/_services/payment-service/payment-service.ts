import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { OrderInput } from 'src/app/_model/order.input.model';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from '../product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public amountToPay : number = 0;
  public canPlaceOrder = false;

  reset() {
    this.amountToPay = 0;
    this.canPlaceOrder = false;
  }
}