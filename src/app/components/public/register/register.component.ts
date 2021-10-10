import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup 

  constructor(private fb: FormBuilder,
     private as: AuthService,
    private router: Router,private toastr: ToastrService) { 

    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
       
      ]),
      rpeatpassword: new FormControl('', [
        Validators.required
       
       
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("[1-9 .'-]+"),
       
       
      ]),
      address: new FormControl('', [
        Validators.required
       
       
      ]),




    }

    this.registerForm = this.fb.group(formControls)
  }

  ngOnInit(): void {
  }

  register()
  {
     console.log(this.registerForm.value);
     let data = this.registerForm.value
     let user = new User()
 
     user.email = data.email
     user.password = data.password
     user.adresse = data.adresse
     user.firstname = data.firstname
     user.lastname = data.lastname
     user.email = data.email
     user.password = data.password
 
     //envoi data vers API
     this.as.registerUser(user).subscribe(
       result =>{ this.router.navigateByUrl('/login');
       this.toastr.success('', 'inscription réussie');
     }
       ,
       error => console.log(error)
     )
  }
}
