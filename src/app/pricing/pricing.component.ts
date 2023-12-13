import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: []
})
export class PricingComponent {

  pricing = {
    tagLine: '',
    title: '',
    buttonText: '',
    plans: [{
      title: '',
      subtitle: '',
      description: '',
      price: '',
      currency: '',
      features: [{}],
      link: ''
    }]
  };

  constructor(private config: ConfigService) {
    
  }

  ngOnInit(){
    this.pricing = this.getPricing();
  }
  
  getPricing(){
    return this.config.getConfig().pricing;
  }
  
}
