import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = 'https://www.potterapi.com/v1';
  public key = '$2a$10$6qEDpZynnybdn.pMk7/9sePHoeKYDRifmhzDObeJr5lBH9RsNrRyu'

  constructor(public http: HttpClient) {
    console.log("constructor called")
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error called");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getCharacterDetail(characterName) {
    let myResponse = this.http.get(this.baseUrl + '/characters?&name=' + characterName + '&key=' + this.key)
    return myResponse;
  }


  public getAllCharacters(houseName) {
    let myResponse = this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${houseName}`)
    return myResponse;
  }

  public getDetail() {
   
    let myResponse = this.http.get(`http://hp-api.herokuapp.com/api/characters`)
    return myResponse;
  }
  
}