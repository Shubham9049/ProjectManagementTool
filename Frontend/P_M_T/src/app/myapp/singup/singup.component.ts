import { Component } from '@angular/core';
import {Router,NavigationEnd}from"@angular/router"
import { UserSignupService } from '../../services/user-signup.service';
import{FormsModule}from "@angular/forms";
// import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  users:any
constructor(private router:Router,private userdata:UserSignupService){
 
}

ngOnInit(){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      const element=document.getElementById("signup")
      if(element){
        element.scrollIntoView({behavior:"smooth",block:"start"})
      }
    }
  })
}

postdata(data:any){
  
console.log(data)
this.userdata.signup(data).subscribe((result)=>{
 window.alert(result.message)
 
})

}
clickBtntologin(){
  this.router.navigate(['login'])
  }
  
}



