import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyOrderDetails } from 'src/app/_model/order.details';
import { ProductService } from 'src/app/_services/product.service/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  constructor(private productService: ProductService){}
  displayedColumns = ["Id", "Order Details", "Order Amount", "Date Placed", "Status"];
  myOrderDetails : MyOrderDetails[] = [];
  displayedModalColumns = ["Product Name", "Price", "Quantity"];
  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.productService.getOrderDetails()
    .subscribe({
      next: (response : MyOrderDetails[]) => {
        console.log(response);
        this.myOrderDetails = response;
        console.log(response);
      },
      error: (error: HttpErrorResponse)=> {
        console.log(error);
      }
    });
  }

  openModal(id: any) {
    const modal = document.getElementById(`id01-${id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(id: any) {
    const modal = document.getElementById(`id01-${id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }
}
