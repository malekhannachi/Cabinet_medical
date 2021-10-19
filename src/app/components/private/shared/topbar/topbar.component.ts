import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  user:User[]=[];
  constructor(private router :Router,private userService :UserService) { }

  ngOnInit(): void {
    /*
    let id = this.router.snapshot.params.id;

    this.userService.getOneUser(id).subscribe(
      result => {
        let category = result;
        console.log(result);

        this.myForm.patchValue({
          name: category.name,
        })

      },
      error => {
        console.log(error);
      }
    )
*/

  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);

  }
}
