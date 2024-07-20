import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})



export class DashboardComponent {

   tiles : any = [
    {
      title:"Orders",
      value:9810,
      color:'#fff8dd',
      iconColor:"#f6c000",
    },
    {
      title:"Sales",
      value:5030,
      color:'#e9f3ff',
      iconColor:"1b84ff",
    },
    {
      title:"Customers",
      value:1050,
      color:'#ffeef3',
      iconColor:"#f8285a",
    },
    {
      title:"Products",
      value:100,
      color:'#dfffea',
      iconColor:"#17c653",
    }  
  ];

}
