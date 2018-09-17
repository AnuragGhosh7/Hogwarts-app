import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  constructor(private http: HttpService, private _route: ActivatedRoute,
    private router: Router) { }


  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]
  public houseOfUser: any = []


  ngOnInit() {

  }

  public createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      category: this.blogCategory
    } // end blogData

    this.houseOfUser.push(blogData)
    //end blog data
    console.log(blogData);
    console.log(blogData.category)
    console.log(this.houseOfUser)

    setTimeout(() => {
      this.router.navigate(['/characters-view', blogData.category]);
    }, 500)


  }  // end create blog
} // end OnInit