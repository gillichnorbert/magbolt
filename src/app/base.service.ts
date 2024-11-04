import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refMagvak:AngularFireList<any>
  user:AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.refMagvak=db.list('/products');
    this.user=db.list('/users');
  }

  addProduct(magok:any) {
    this.refMagvak.push(magok);
  }

  getProducts() {
    return this.refMagvak
  }

  updateProduct(magok:any){
    let key= magok.key
    delete magok.key
    this.refMagvak.update(key,magok)
   }

   deleteProduct(magok:any) {
    this.refMagvak.remove(magok.key)
   }
}
