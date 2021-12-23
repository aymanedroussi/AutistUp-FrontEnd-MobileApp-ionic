import { AuthService } from 'src/app/services/auth.service';
import { Question } from './../models/question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../models/forum';
import { Parent } from '../models/parent';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  forumSelected:number;
  constructor(private http :HttpClient,private authService:AuthService) { }

  getAllForums(){
    return this.http.get<any[]>(`${environment.apiBack_url}/forum/getAll`);
  }

  setForumSelected(id:any){
    this.forumSelected=id;
  }
  getForumSelected(){
    return this.forumSelected;
  }


  getAllQuestions(id:any){
    return this.http.get<any[]>(`${environment.apiBack_url}/forum/getAllQuestions/`+id);
  }

  addQuestion(data:Question){
    this.authService.getUser().subscribe((parent:Parent)=>console.log(parent))
    return this.http.post(`${environment.apiBack_url}/forum/add`,data);
  }

  addForum(data:Forum){
    console.log(data);
    return this.http.post(`${environment.apiBack_url}/forum/addForum`,data);
  }
}
