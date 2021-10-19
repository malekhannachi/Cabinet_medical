import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ord } from 'src/app/models/ord';
import { User } from 'src/app/models/user';
import { OrdService } from 'src/app/services/ord.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-ord',
  templateUrl: './add-ord.component.html',
  styleUrls: ['./add-ord.component.css']
})
export class AddOrdComponent implements OnInit {

  myForm: FormGroup;
  users :User[]=[];

  constructor(private fb: FormBuilder,
     private service: OrdService, 
     private router: Router,
     private toastr: ToastrService,
     private userService :UserService
     ) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      patient: new FormControl('', [
        Validators.required,
        
      ])

    }
    this.myForm = this.fb.group(formControls);
  }
  get name() { return this.myForm.get('name') }
  get patient() { return this.myForm.get('patient') }
  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      (res : any)=>this.users=res,
      (err)=>console.log(err)   
    )

  }

  saveName() {
    let data = this.myForm.value;
    console.log(data);
    let ord = new Ord(undefined, data.name);
    this.service.saveOrdonnance(ord).subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('', 'Ordonnace Ajouteé');
        this.router.navigateByUrl('/list-ord')
      },
      (err: any) => {
        console.log(err)
      }

    );


  }


}
