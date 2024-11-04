import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menuItems:any = [
    {path:"home", text:"Home"},
    {path:"products", text:"Products"},
    {path:"login", text:"Login"} 
  ];
}
