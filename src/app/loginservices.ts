import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class LoginServices {

constructor(
    private http : HttpClient
){}

    login(findDetails){
        return this.http.post("http://localhost:3001/v1/Login/login",findDetails);
    }


}