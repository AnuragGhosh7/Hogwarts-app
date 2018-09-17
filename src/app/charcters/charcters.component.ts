import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Location } from '@angular/common';


@Component({
  selector: 'app-charcters',
  templateUrl: './charcters.component.html',
  styleUrls: ['./charcters.component.css'],
  providers: [Location]
})
export class CharctersComponent implements OnInit {

  public currentHouse;
  public breakpoint;

  constructor(private http: HttpService, private router: Router, private _route: ActivatedRoute,
              private spinner:NgxSpinnerService,   private loc: Location) {
    console.log("constructor called")
  }

  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);
  

    console.log("onInit called")

    let houseName = this._route.snapshot.paramMap.get('house')
    console.log(houseName)

    this.http.getAllCharacters(houseName).subscribe(

      data => {

        console.log(data)
        this.currentHouse = data;
      },

      error => {
        console.log(error.errorMessage)
      },

    )

  }

  onResize(event) {

  }


}
