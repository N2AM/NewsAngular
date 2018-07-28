import { Component, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  providers:[NewsService]
})
export class PostsComponent implements OnInit {
  news= {articles:[]};
  numberOfArticles= NewsService.length;
  newsSources= {sources:[]};
  filterSource='google-news';

  constructor(private newsService: NewsService){}

  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
  			response => this.news = response.json()
    );
    this.getnewsSources();
  }


  filterNews(source) {
    this.news={articles:[]};
    this.newsService.getNewBySource(source)
    .subscribe(
      response => this.news = response.json()
    );
  }

  getnewsSources() {
    this.newsService.getSources()
      .subscribe(
        response => this.newsSources = response.json()
      );
  } 
  signupfrm;
  process(){
    
    console.log(this.signupfrm.value); //get full object
    console.log(this.signupfrm.value.email); //get only email value
  }

}