import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from '../interface/login.interface';
import { TokenInterface } from '../interface/token.interface';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router, private loginService:LoginService) { }

  form = new FormGroup({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })

  ngOnInit(): void {

    this.form.reset()
  }

  logIn(){

    if(this.form.valid){

      const user: LoginInterface = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value,
        grant_type: "password",
      }

      this.loginService.postLogin(user).subscribe(
        (resp)=>{
          
          console.log(resp)
          
          const token: TokenInterface = resp;
          console.log(token)

          if(token.access_token!=null){
            this.router.navigateByUrl('/map');

          }else{
            console.log("Credenciales invalidas")
          }
          
          
        }
      )

    }else {
      
      
    }



    

  }

}
