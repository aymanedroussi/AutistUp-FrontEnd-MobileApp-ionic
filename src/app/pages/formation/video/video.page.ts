import { VideoFormation } from './../../../models/video-formation';
import { VideoFormationService } from './../../../services/video-formation.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  searchLabel :string;
  constructor(private router:Router,private videoFormationService:VideoFormationService) { }

  videosFormation: VideoFormation[]=[];
  ngOnInit() {
    this.getAllVideos();
    
  }
  back(){
    this.router.navigateByUrl("/article-video");
  }

  getAllVideos() {
    return this.videoFormationService.getAllVideos().subscribe((videos:VideoFormation[])=> this.videosFormation=videos);
    
  }
  


}
