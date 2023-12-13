import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: []
})
export class TestimonialComponent {

  testimonial = {
    tagLine: '',
    title: '',
    description: '',
    customers: [{
      name: '',
      image: '',
      quote: ''
    }]
  };

  constructor(private config: ConfigService) {
    
  }

  ngOnInit(){
    this.testimonial = this.getTestimonial();
  }
  
  getTestimonial(){
    return this.config.getConfig().testimonial;
  }
  
}
