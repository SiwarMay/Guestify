import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
user = {
  email:'',
  password:''
}


constructor(private _auth: AuthService , private router : Router){}

ngOnInit(): void{}
token:any;


login(){
  this._auth.login(this.user)
  .subscribe(
    res=>{
      this.token = res;
      localStorage.setItem('token' , this.token.mytoken)
      this.router.navigate(['/home']);


    }
    ,err=>{
      
      console.log(err);
    }
  )

}

}
