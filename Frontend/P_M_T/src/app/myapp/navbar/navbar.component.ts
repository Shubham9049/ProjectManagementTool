import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,RouterLinkActive} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router:Router){}

clickBtn(data:any){
this.router.navigate([`${data}`])
}

}
