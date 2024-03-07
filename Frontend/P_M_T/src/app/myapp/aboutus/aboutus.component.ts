import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
constructor(public router:Router){}
ngOnInit(){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      const element=document.getElementById("aboutus")
      if(element){
        element.scrollIntoView({behavior:"smooth",block:"start"})
      }
    }
  })
}



}
