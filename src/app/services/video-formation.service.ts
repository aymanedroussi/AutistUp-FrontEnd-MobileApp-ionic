import { VideoFormation } from './../models/video-formation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

environment;
@Injectable({
  providedIn: 'root'
})
export class VideoFormationService {

  constructor(private http :HttpClient) { }

  getAllVideos(){
    return this.http.get<any[]>(`${environment.apiBack_url}/formation/video/getAll`);
  }
}
