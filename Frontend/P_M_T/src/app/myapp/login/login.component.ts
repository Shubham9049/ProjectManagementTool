import { Component,AfterViewInit } from '@angular/core';
import{NavbarComponent}from "../navbar/navbar.component";
import { Router, NavigationEnd } from '@angular/router';
import { UserSignupService } from '../../services/user-signup.service';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../../services/data.service.service';
import Swal from 'sweetalert2';
// import { Injectable } from '@angular/core';




// import { RouterOutlet ,RouterLink,RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit{
  constructor(private router: Router,private loginData:UserSignupService,private userService:DataServiceService) { }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            const element = document.getElementById('login');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

name:any=""

loginUser(data:any){
this.loginData.logIn(data).subscribe((result)=>{
  if(result.data==="success"){
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: result.message,
      showConfirmButton: false,
      timer: 1500
    });
  }else{
    Swal.fire({
      icon:'error',
      title:result.message
    });
  }
  
  this.userService.setUserName(result.name);
  if(result.status==true){
    localStorage.setItem("token",result.token);
    localStorage.setItem("user_id", result.user_id);
   if(result.role==="admin"){
    this.router.navigate(['admin-page'])
   }
   if(result.role==="employee"){
    this.router.navigate(['user-page'])
   }
    
    console.log(result.token)
    
    
  }
  this.name=result.name;
  
  // console.log(this.name)
})
console.log("Login data is ",data);
}

clickBtntosignup(){
  this.router.navigate(['signup'])
  }


}
