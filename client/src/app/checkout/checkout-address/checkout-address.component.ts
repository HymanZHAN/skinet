import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AccountService } from 'src/app/account/account.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss'],
})
export class CheckoutAddressComponent {
  @Input() checkoutForm!: FormGroup;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  constructor(private accountService: AccountService, private toast: HotToastService) {}

  saveUserAddress() {
    if (
      this.checkoutForm.get('addressForm')?.valid &&
      this.checkoutForm.get('addressForm')?.dirty
    ) {
      this.accountService.updateUserAddress(this.checkoutForm.get('addressForm')?.value).subscribe(
        (address) => {
          this.toast.success('Address saved');
          this.checkoutForm.get('addressForm')?.reset(address);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
