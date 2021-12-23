import { ArticleService } from './../../../services/article.service';
import { ArticleFormation } from './../../../models/article-formation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  articleFormation: ArticleFormation[]=[];
  searchLabel :string;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
  }
  back(){
    this.router.navigateByUrl("/article-video");
    this.getAllArticles();
  }
  getAllArticles() {
    return this.articleService.getAllArticles().subscribe((articles:ArticleFormation[])=>{
    for(var articleUpdate of articles){
      articleUpdate.date=articleUpdate.datepublication?.toString().slice(0,10);
    }
   
    this.articleFormation=articles});
    
  }
  

}
