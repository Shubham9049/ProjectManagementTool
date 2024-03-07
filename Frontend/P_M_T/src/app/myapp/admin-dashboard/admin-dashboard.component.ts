import { Component,OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DataServiceService } from '../../services/data.service.service';
import { Router, NavigationEnd } from '@angular/router';
import { UserSignupService } from '../../services/user-signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LoginComponent,CommonModule,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit  {
  userName: string | undefined;
  constructor(private userService: DataServiceService,private router: Router,private getuser:UserSignupService) {
    // Retrieve user name from the service
    this.userName = this.userService.getUserName();
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
  data:any[]=[]
  ngOnInit(){
   if(this.getuser.getUserDetails()!==null){
    this.getuser.getUserDetails()!.subscribe((res : any) =>{
      // console.log("Admin Details", res)
      this.data=res
    })
    console.log(this.data)
   }
}
name:any
capturedId: any;
captureUserId(userId: any) {
  this.capturedId = userId;
  this.userService.setCaptureUserID(userId);
  console.log(this.capturedId)
}
clearId(){
  this.capturedId=""
  this.name=""
  console.log(this.capturedId)
}
capturedName(namedata:any){
this.name=namedata
this.userService.setCaptureName(namedata)
console.log(this.name)
}

assingTask(data:any){
  console.log(data)
this.getuser.task(data).subscribe((result)=>{
  alert(result+'Assigned Successfully')
})
}




}

