import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NewsService]
  
})
export class HomeComponent implements OnInit {
  news= {articles:[]};
  constructor(private newsService: NewsService){}
  ngOnInit() {
    
    this.newsService.getTopHeadLines()
  		.subscribe(
  			response => this.news = response.json()
    );
  }
  wasClicked = false;
  toggleActive(){
    this.wasClicked= !this.wasClicked;

  }
  /*addBookMark(){
    if (sessionStorage.clickcount==0) {
      sessionStorage.clickcount = 1;
       sessionStorage.bookmarknumber =Number(sessionStorage.bookmarknumber)+1;
  } else if(sessionStorage.clickcount == 1 ) {
      sessionStorage.clickcount = 0;
      sessionStorage.bookmarknumber =Number(sessionStorage.bookmarknumber)-1;
      return sessionStorage.bookmarknumber;
  }
    
   }*/
}