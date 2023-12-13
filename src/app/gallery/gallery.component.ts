import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: []
})
export class GalleryComponent {

  gallery = {
    images: [{}]
  };

  constructor(private config: ConfigService) {

  }
  
  ngOnInit(){
    this.gallery = this.getGallery();
  }
  
  getGallery(){
    return this.config.getConfig().gallery;
  }
}
