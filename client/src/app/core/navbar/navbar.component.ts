import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isProfileDropdownOpen = false;
  isLoggedIn = false;
  basket$: Observable<IBasket>;
  basketCount$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = basketService.basketItemCount$;
  }

  toggleMenuOpen() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
}
