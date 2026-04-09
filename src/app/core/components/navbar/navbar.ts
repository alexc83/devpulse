import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserService } from '../../services/user-service';
import { user } from '@angular/fire/auth';
import { LoggedOutFunctionality } from '../logged-out-functionality/logged-out-functionality';
import { LoggedInFunctionality } from '../logged-in-functionality/logged-in-functionality';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LoggedOutFunctionality, LoggedInFunctionality],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userService = inject(UserService);
  protected readonly user = user;
}
