import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css'
})
export class AdminProductListComponent {
  magvak:any=[]
  newProduct:any={}
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

  addProduct(){
    this.base.addProduct(this.newProduct)
    this.newProduct={}
  }
  updatedProduct(mag:any){
    this.base.updateProduct(mag)
  }
  deleteProduct(mag:any){
    this.base.deleteProduct(mag)
  }
}
