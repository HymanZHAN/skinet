import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutAddressComponent {
  @Input() checkoutForm!: FormGroup;

  constructor(private accountService: AccountService, private toast: HotToastService) {}

  saveUserAddress() {
    if (
      !this.checkoutForm.get('addressForm')?.valid ||
      !this.checkoutForm.get('addressForm')?.dirty
    ) {
      this.accountService.updateUserAddress(this.checkoutForm.get('addressForm')?.value).subscribe(
        () => {
          this.toast.success('Address saved');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
