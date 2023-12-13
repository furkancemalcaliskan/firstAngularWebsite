import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: []
})
export class IntroComponent {

  intro = {
    tagLine: '',
    title: '',
    description: '',
    features: [{
      icon: '',
      title: '',
      description: ''
    }]
  };



constructor(private config: ConfigService) {

}

ngOnInit(){
  this.intro = this.getIntro();
}

getIntro(){
  return this.config.getConfig().intro;
}

}
