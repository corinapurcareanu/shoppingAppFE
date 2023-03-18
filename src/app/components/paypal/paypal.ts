import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';;
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { PaymentService } from 'src/app/_services/payment-service/payment-service';


@UntilDestroy()
@Component({
  selector: 'paypal',
  templateUrl: './paypal.html',
  styleUrls: ['./paypal.css'],
})

export class Paypal implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;

  constructor(private paymentService: PaymentService) {
    
  }
  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: this.paymentService.amountToPay.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.paymentService.amountToPay.toString()
              }
            }
          },
        }
      ]
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
      this.paymentService.canPlaceOrder = true;
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
}