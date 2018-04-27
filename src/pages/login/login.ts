import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,Validators } from '@angular/forms'; 
//import { Validators } from '@angular/forms/src/validators';
import { Users } from '../../models/users';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login_type = "login";
  login_form : any;
  register_form : any;
  phone_max_leng = 10;
  password_max_leng = 6;
  users = {} as Users;
  
  constructor(public  navCtrl: NavController, 
              public  navParams: NavParams,
              private formBuilder : FormBuilder) {
    this.login_form = this.formBuilder.group({
                      username : ['',[/*Validators.minLength(this.username_max_leng),*/ Validators.required]],
                      password : ['',[Validators.minLength(this.password_max_leng), Validators.required]]
    });

    this.register_form = this.formBuilder.group({
                      username : ['',[/*Validators.minLength(this.phone_max_leng),*/ Validators.required]],
                      password : ['',[Validators.minLength(this.password_max_leng), Validators.required]],
                      phone : ['',[Validators.minLength(this.phone_max_leng), Validators.required]]
    });

  

  }

  login(users: Users){
    console.log(users.username);
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
