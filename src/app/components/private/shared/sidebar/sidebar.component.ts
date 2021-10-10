import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmin : Boolean = false;
  isPatient : Boolean = false;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isLoggedInAdmin();
    this.isPatient = this.authService.isLoggedInPatient();
  }

}
