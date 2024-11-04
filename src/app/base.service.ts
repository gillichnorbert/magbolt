import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refMagvak:AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.refMagvak=db.list('/products');

  }
  addProduct(magok:any) {
    this.refMagvak.push(magok);
  }

  getPrdoucts() {
    return this.refMagvak
  }
}
