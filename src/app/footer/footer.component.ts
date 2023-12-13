import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent implements OnInit{

footer = {
  copyRightText: '',
  developer: '',
  developerLink: ''
}

constructor(private config: ConfigService) {
  
}

ngOnInit(){
  this.footer = this.getFooter();
}

getFooter(){
  return this.config.getConfig().footer;
}

}
