import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beverage } from '../../models/beverage';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the BeverageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeverageServiceProvider {

  apiUrl:string="http://chapayom.codehansa.com/crud_menus.php?cmd=select";
  constructor(public http: HttpClient) {
    console.log('Hello BeverageServiceProvider Provider');
  }

  getAllData(): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(this.apiUrl);
  }
}
