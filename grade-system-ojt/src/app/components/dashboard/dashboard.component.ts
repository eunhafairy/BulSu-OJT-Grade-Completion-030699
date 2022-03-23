import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
@Input() public email!:string;
role!:string;

user!:User;
  constructor(private route : ActivatedRoute, public authService: AuthService) {
    
  }
  ngOnInit(): void {

    this.user = this.authService.userData as User;
    if(!this.authService.userData.photoURL){
      this.user.photoURL = '/assets/dummy-user.png';
    }
    this.user.displayName = this.authService.userData.userName;
    this.user.photoURL = this.authService.userData.photoURL;
    this.user.email = this.authService.userData.userEmail;
    if (this.authService.getRole(this.user.email) == "Student"){


    }
    else{

      
    }
    
}

}