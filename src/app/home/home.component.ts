import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NewsService,NgbCarouselConfig] 
  
})
export class HomeComponent implements OnInit {
  news= {articles:[]};
  
  constructor(private newsService: NewsService){   
  }
  ngOnInit() {
    
    this.newsService.getTopHeadLines()
  		.subscribe(
  			response => this.news = response.json()
    );
    
  }

  listView = false;
  singleNews = true;

  toggleActive(){
    this.listView= true;
    this.singleNews=false;

  }
  toggleAction(){
    this.singleNews=true;
    this.listView= false;

  }
 
  
   counter : number = 0;
   bookmarked=false;
   addBookMark(){
     this.counter+=1;
     this.bookmarked=!this.bookmarked;

   }

   
   
  }
