import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket.model';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isProfileDropdownOpen = false;
  currentUser$: Observable<IUser>;
  basket$: Observable<IBasket>;
  basketCount$: Observable<number>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private toast: HotToastService
  ) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = basketService.basketItemCount$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  toggleMenuOpen() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  logout() {
    console.log('logging out');
    this.isProfileDropdownOpen = false;
    this.accountService.logout();
    this.toast.success('You are now logged out.');
  }
}
