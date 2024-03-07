import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private userName: string | undefined;
 
  constructor() { }

  setUserName(name: string): void {
    this.userName = name;
  }

  getUserName(): string | undefined {
    return this.userName;
  }

  capturedUserId: any;
  setCaptureUserID(userId: any) {
    this.capturedUserId = userId;
  }
  capturedName: any;
  setCaptureName(name: any) {
    this.capturedName = name;
  }

}
