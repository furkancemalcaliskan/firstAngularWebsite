import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit{

  header = {
    heading: '',
    headingText: '',
    buttonText: '',
    headerButtonLink: ''
  };

  constructor(private config: ConfigService) {    
  }

ngOnInit(){
  this.header = this.getHeader();
}

getHeader(){
  return this.config.getConfig().header;
}

}
