import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,RouterLinkActive} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet ,RouterLink,RouterLinkActive,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
