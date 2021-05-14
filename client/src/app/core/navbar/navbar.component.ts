import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isProfileDropdownOpen = false;
  isLoggedIn = false;
  basket$: Observable<IBasket>;
  basketCount$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = this.basket$.pipe(map((basket) => basket.items.length));
  }

  toggleMenuOpen() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
}
