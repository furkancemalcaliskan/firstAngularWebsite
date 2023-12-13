import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: []
})
export class SocialComponent implements OnInit{

  social = [{
    target: '',
    title: '',
    userName: '',
    icon: '',
    link: ''
  }]

  constructor(private config: ConfigService) {
  }

  ngOnInit(){
    this.social = this.getSocial();
  }

  getSocial(){
    return this.config.getConfig().social;
  }
}
