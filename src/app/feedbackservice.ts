import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class FeedbackServices {

constructor(
    private http : HttpClient
){}

    feedback(sendDetails){
        return this.http.post("http://localhost:3001/v1/feedback/feedbackdetails",sendDetails);
    }


}