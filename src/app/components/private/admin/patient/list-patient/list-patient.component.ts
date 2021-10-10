import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  users:any[]=[];
  constructor(private userSerivce:UserService) { }

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

}
