import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent implements OnInit{


  blog = {
    tagLine: '',
    title: '',
    posts: [{}]
  }

  constructor(private config: ConfigService) {
  }

  ngOnInit(){
    this.blog = this.getBlog();
  }

  getBlog(){
    return this.config.getConfig().blog;
  }

}
