import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackServices } from '../feedbackservice';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  loginData = {
    youremail: '',
    yourname : '',
    radiobutton : {
      bad : '',
      average : '',
     good : '',
    },
    comments : '',
    empEmail : ''
  };
  public userdata: any;
  public data: any;
  
  constructor(
    private route: Router,
    private feedbackservice: FeedbackServices
  ) { }

  ngOnInit() {
  }
  feedback(f){
    console.log(f)
    this.userdata = this.loginData;
    console.log(this.userdata);
    if (!this.userdata.empEmail) {
      alert("Please Provide empEmail");
      this.userdata.email='';
    }
    else if (!this.userdata.comments) {
      alert("Please Provide comments");
    }
    else if (!this.userdata.yourname) {
      alert("Please Provide yourname");
    }
    else if (!this.userdata.youremail) {
      alert("Please Provide youremail");
    }
    else {
      this.feedbackservice.feedback(this.userdata)
        .subscribe(
          (response) => {
            console.log(response);
            this.data = response;
            console.log(this.data);
            if (this.data.status) {
              console.log(this.data.status)
              this.userdata.empEmail='';
              this.userdata.bad='';
              this.userdata.average='';
              this.userdata.good='';
              this.userdata.comments='';
              this.userdata.yourname='';
              this.userdata.youremail='';
        
            }
            else{
              alert("credentials are wrong");
              this.userdata.empEmail='';
              this.userdata.bad='';
              this.userdata.average='';
              this.userdata.good='';
              this.userdata.comments='';
              this.userdata.yourname='';
              this.userdata.youremail='';
            }

          }
        )



    }
  }
}
