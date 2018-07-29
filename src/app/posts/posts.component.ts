import { Component, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from "@angular/router";

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
  i:number;
  post:any;
  constructor(private newsService: NewsService, private activatedRoute:ActivatedRoute ){
    this.activatedRoute.params.subscribe(params=>{
      this.i = parseInt(params.index);
      
    });
    
  }

  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
        response => {
          this.news = response.json();
          console.log(this.news.articles);
          this.post = this.news.articles[this.i];
        // console.log(response.json().articles);
      }
    );
  }


  filterNews(source) {
    this.news={articles:[]};
    this.newsService.getNewBySource(source)
    .subscribe(
      response => this.news = response.json()
    );
  }

  signupfrm;
  process(){
    
    console.log(this.signupfrm.value); //get full object
    console.log(this.signupfrm.value.email); //get only email value
  }

}