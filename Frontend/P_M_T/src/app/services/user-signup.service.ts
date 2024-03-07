import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from"@angular/common/http";
import { Observable ,of, throwError, forkJoin} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserSignupService {
BaseUrl="http://localhost:5500"
  constructor(private http:HttpClient) { }
  signup(signupdata:any){
    return this.http.post<any>(`${this.BaseUrl}/pmt/signup`,signupdata)
  }
  logIn(logindata:any){
    return this.http.post<any>(`${this.BaseUrl}/pmt/login`,logindata)
  }
  getUserDetails(): Observable<any> {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        const headers = new HttpHeaders().set('authorization', `${token}`);
        return this.http.get(`${this.BaseUrl}/pmt/signup`, { headers });
      } else {
        console.error('Token not found in localStorage.');
        return of(null);
      }
    } else {
      console.error('localStorage is not defined.');
      return of(null);
    }
  }
 task(taskdata:any){
  return this.http.post<any>(`${this.BaseUrl}/admin/assingtask`,taskdata)
 }

 UserTaskDetails(): Observable<any>{
   if(typeof localStorage !== 'undefined'){
const token=localStorage.getItem("token")
let userid=localStorage.getItem("user_id")
if(token){
  const headers = new HttpHeaders().set('authorization', `${token}`);
  return this.http.get(`${this.BaseUrl}/admin/usertask/${userid}`, { headers });
}else {
  console.error('Token not found in localStorage.');
  return of(null);
}
   }else {
    console.error('localStorage is not defined.');
    return of(null);
  }
 }

 TaskExecute(ex: any): Observable<any> {
  const idsString = localStorage.getItem("task_id");
  console.log(idsString);

  return new Observable(observer => {
    setTimeout(() => {
      const request = this.http.put<any>(`${this.BaseUrl}/admin/taskstatus/${idsString}`, ex);
      request.subscribe(
        response => observer.next(response),
        error => observer.error(error),
        () => observer.complete()
      );
    }, 1000);
  });
}
}
