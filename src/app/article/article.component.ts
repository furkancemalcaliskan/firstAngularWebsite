import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  post = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) {
    
  }

  ngOnInit(){
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.getPostByID(id);
  }

  getPostByID(id: number){
    return this.config.getPostById(id);
  }

  getBack(){
    this.location.back();
  }

}
