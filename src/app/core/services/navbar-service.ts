import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  hideUserMenu = signal(true);

  toggleNavBarMenu() {
    this.hideUserMenu.set(!this.hideUserMenu());
  }
}
