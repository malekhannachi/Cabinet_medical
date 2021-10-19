import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addUserForm: FormGroup 

  constructor(private fb: FormBuilder,
     private authservice: AuthService,
    private router: Router ,private toastr: ToastrService) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
       
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+")
      
      ])
    }
    this.addUserForm = this.fb.group(formControls)
   }

   get email() { return this.addUserForm.get('email') }
   get password() { return this.addUserForm.get('password') }
  
  ngOnInit(): void {
  }

  addUser() {
    console.log(this.addUserForm.value);
    let data = this.addUserForm.value;

    let user = new User(undefined,undefined,undefined,undefined,data.email,data.password,undefined);
  console.log(user);
  this.authservice.loginUser(user).subscribe(
    res=>{
      console.log(res);
      let token = res.token;

      localStorage.setItem("myToken", token);
     
        this.router.navigate(['/']);
     
    },
    err=>{
      console.log(err);

    }


  )

  }

}
