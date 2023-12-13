import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: []
})
export class ContentComponent {
  
  services = {
    tagLine: '',
    title: '',
    description: '',
    buttonText: ''
  };

  constructor(private config: ConfigService) {
    
  }

  ngOnInit(){
    this.services = this.getServices();
  }
  
  getServices(){
    return this.config.getConfig().services;
  }

}
