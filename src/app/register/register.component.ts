import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    lastname:'',
    email:'',
    password:'',
  }

  image: any;
  select(event:any){
    this.image = event.target?.files[0];
  }

  constructor(private _auth:AuthService,private router:Router){}
 
  register(){

    let fd = new FormData()
    fd.append('name',this.user.name)
    fd.append('lastname',this.user.lastname) 
    fd.append('email',this.user.email)
    fd.append('password',this.user.password)
    fd.append('image',this.image)

    this._auth.register(fd)
    .subscribe(
      fd=>{this.router.navigate(['/user/login'])}
    );


  }

  
}
