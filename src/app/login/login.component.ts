import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../loginservices';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    password: '',
    email: ''
  };
  public userdata: any;
  public data: any;

  constructor(
    private route: Router,
    private loginService: LoginServices
  ) { }

  ngOnInit() {
  }
  Login() {
    this.userdata = this.loginData;
    console.log(this.userdata);
    if (!this.userdata.email) {
      alert("Please Provide Email");
      this.userdata.email='';
    } else if (!this.userdata.password) {
      alert("Please Provide Password");
      this.userdata.password=''
    } else {
      this.loginService.login(this.userdata)
        .subscribe(
          (response) => {
            console.log(response);
            this.data = response;
            console.log(this.data);
            if (this.data.status) {
              console.log(this.data.status)
               this.route.navigate(['/userslist'])
              this.userdata.email='';
              this.userdata.password=''
            }
            else{
              alert("credentials are wrong");
              this.userdata.email='';
              this.userdata.password=''
            }

          }
        )



    }
  }
}
