import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  magvak:any=[]
  columns=[
    {key:"name", text:"Név", type:'text'},
    {key:"price", text:"Ár", type:'number'},
    {key:"description", text:"Leírás", type:'textarea'},
    {key:"picture", text:"Kép", type:"textarea"}
  ]

  constructor(private base:BaseService) {
    this.base.getProducts().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )
       )
    ).subscribe(
      (res)=>this.magvak=res
    )
  }
}
