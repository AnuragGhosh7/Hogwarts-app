import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [Location]
})
export class UsersComponent implements OnInit {

  public characterData;
  public getData;

  constructor(private http: HttpService, private router: Router, 
    private _route: ActivatedRoute, private loc: Location, private spinner:NgxSpinnerService) {

    console.log("constructor called")
  }

  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);
  
    console.log("ngOnInit called")
    let characterName = this._route.snapshot.paramMap.get('user')
    console.log(characterName)

    this.http.getCharacterDetail(characterName).subscribe(

      data => {
        this.characterData = data;
        console.log(this.characterData)
      }
    )

    this.http.getDetail().subscribe(
      data => {
        this.getData = data;
        console.log(this.getData)
      }

    )


  }








}
