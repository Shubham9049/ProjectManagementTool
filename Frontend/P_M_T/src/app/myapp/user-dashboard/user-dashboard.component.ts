import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DataServiceService } from '../../services/data.service.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserSignupService } from '../../services/user-signup.service';



@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [LoginComponent,CommonModule,FormsModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  userName: string | undefined;
  constructor(private userService: DataServiceService,private router: Router,private user_task:UserSignupService) {
    // Retrieve user name from the service
    this.userName = this.userService.getUserName();
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
   
  tasks:any[]=[]
  ngOnInit(){
    if(this.user_task.UserTaskDetails()!==null){
      this.user_task.UserTaskDetails().subscribe((res:any[])=>{
        if(res){
          const taskIds = res.map(taskData => taskData.task_id);
          // localStorage.setItem('taskIds', JSON.stringify(taskIds));
          console.log(taskIds)
          }
        this.tasks=res
        
      })
    }
  }
  updateTaskStatus(data:any){
    console.log(data.task_id)
    localStorage.setItem("task_id", data.task_id)
   this.user_task.TaskExecute(data).subscribe((result:any)=>{
    window.alert(result.message)
   })
  }
}
