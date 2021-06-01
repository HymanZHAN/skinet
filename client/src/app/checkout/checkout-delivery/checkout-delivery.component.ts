import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDeliveryMethod } from 'src/app/shared/models/delivery-method.model';
import { CheckoutService } from '../checkout.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss'],
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm!: FormGroup;

  deliveryMethods$: Observable<IDeliveryMethod[]>;
  selectedDeliveryMethod$: Observable<IDeliveryMethod>;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  constructor(private checkoutService: CheckoutService) {
    this.deliveryMethods$ = this.checkoutService.deliveryMethods$;
    this.selectedDeliveryMethod$ = this.checkoutService.deliveryMethod$;
  }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe(
      () => {},
      (error) => {
        console.error(error);
      }
    );
  }
}
