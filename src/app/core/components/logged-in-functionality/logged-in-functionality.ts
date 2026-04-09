import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from '../../services/navbar-service';

@Component({
  selector: 'app-logged-in-functionality',
  imports: [RouterLink],
  templateUrl: './logged-in-functionality.html',
  styleUrl: './logged-in-functionality.css',
})
export class LoggedInFunctionality {
  navBarService = inject(NavbarService);

  protected toggleNavbarMenu() {


  }
}
