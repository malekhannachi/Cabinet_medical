import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  users:any[]=[];
  constructor(private userSerivce:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userSerivce.getAllUsers().subscribe(
      (result:any)=>{
        this.users = result
        
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }


  delete(category:any)
  {
   
    let index = this.users.indexOf(category);
    this.users.splice(index, 1);
    this.userSerivce.deleteUser(category.id).subscribe(
      res=>{
        this.toastr.error('', 'Patient est Supprimé');
      },
      err =>{
        console.log(err);
      }
    )
    
  }








}
