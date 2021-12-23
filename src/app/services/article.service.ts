import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http :HttpClient) { }

  getAllArticles(){
    return this.http.get<any[]>(`${environment.apiBack_url}/formation/article/getAll`);
  }
}
