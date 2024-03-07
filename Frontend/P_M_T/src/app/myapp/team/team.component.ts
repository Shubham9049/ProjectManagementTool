import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
constructor(public router:Router){}
ngOnInit(){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      const ele=document.getElementById("team")
      if(ele){
        ele.scrollIntoView({behavior:"smooth",block:"start"})
      }
    }
  })
}
}
