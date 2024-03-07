import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyappModule}from "./myapp/myapp.module";
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MyappModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P_M_T';
}
