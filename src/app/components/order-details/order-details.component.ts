import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyOrderDetails } from 'src/app/_model/order.details';
import { ProductService } from 'src/app/_services/product.service/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  constructor(private productService: ProductService){}
  displayedColumns = ["Id", "Order Details", "Name", "Address", "Contact Number", "Order Amount", "Date Placed", "Status", "Action"];
  allOrderDetails : MyOrderDetails[] = [];
  displayedModalColumns = ["Product Name", "Price", "Quantity"];
  status: string = 'All'
  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin();
  }

  getAllOrderDetailsForAdmin() {
    this.productService.getAllOrderDetailsForAdmin(this.status)
    .subscribe({
      next: (response : MyOrderDetails[]) => {
        console.log(response);
        this.allOrderDetails = response;
      },
      error: (error: HttpErrorResponse)=> {
        console.log(error);
      }
    });
  }

  changeStatus(status: string) {
    this.status = status;
    this.getAllOrderDetailsForAdmin();
  }

  markAsDelivered(id : number) {
    this.productService.markAsDelivered(id)
    .subscribe({
      next: (response) => {
        this.getAllOrderDetailsForAdmin();
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
