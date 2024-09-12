import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SigninService } from 'src/app/services/signin.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  constructor(private signinService:SigninService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.signinService.createUser(this.user).subscribe(data=>{
      this.router.navigate(['login']);
    });
  }

}
