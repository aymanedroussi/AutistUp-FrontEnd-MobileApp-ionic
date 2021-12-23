import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-video',
  templateUrl: './article-video.page.html',
  styleUrls: ['./article-video.page.scss'],
})
export class ArticleVideoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToVideo(){
this.router.navigateByUrl("formation/video");
  }
  navigateToArticle(){
    this.router.navigateByUrl("formation/article");
  }
  back(){
    this.router.navigateByUrl("/home-page");
  }
}
