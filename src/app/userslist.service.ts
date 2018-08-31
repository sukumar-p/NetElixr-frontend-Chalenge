import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class userslistService {

constructor(
    private http : HttpClient
){}

    userslist(){
        return this.http.get("http://localhost:3001/v1/UserDetails/userlist");
    }


}