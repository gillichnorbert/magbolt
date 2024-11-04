import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menuItems:any = [
    {path:"home", text:"Kezdőlap"},
    {path:"products", text:"Termékek"},
    {path:"login", text:"Bejelentkezés"} 
  ];
}
