import { Component, OnInit } from '@angular/core';
import { userslistService } from '../userslist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  public name: any;
  public email: any;
  public gender: any;
  public userlist: any = [];
  public UsersData: any;
  public data: any;
  public deletedData: any;

  userData = {
    email: ''
  };

  constructor(
    private UsersListservice: userslistService,
    private route: Router

  ) { }

  ngOnInit() {

  }

  getuserslist() {
    // this.UsersData = this.userData;

    this.UsersListservice.userslist()
      .subscribe(
        (response) => {
          console.log(response);
          this.data = response;

          console.log(this.data);


        }
      )

  }
  submitfedback(){
    this.route.navigate(['/feedback'])
  }




}
