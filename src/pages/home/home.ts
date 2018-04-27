import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeverageServiceProvider } from '../../providers/beverage-service/beverage-service';
import { Beverage } from '../../models/beverage';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beverageList: Beverage[];
  subscription : Subscription;

  constructor(public navCtrl: NavController, 
              public beverageServer : BeverageServiceProvider) {

  }

  private getData(){
    this.subscription = this.beverageServer.getAllData().subscribe(
      (beverageList:Beverage[]) => this.beverageList = beverageList
    );
  }

  ionViewWillEnter(){
    this.getData();
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

}
