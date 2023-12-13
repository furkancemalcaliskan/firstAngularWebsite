import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: []
})
export class ClientsComponent {

  clients = {
    tagLine: '',
    title: '',
    description: '',
    companies: [{
      name: '',
      logo: '',
      link: ''
    }]
  };

  constructor(private config: ConfigService) {
    
  }

  ngOnInit(){
    this.clients = this.getClients();
  }
  
  getClients(){
    return this.config.getConfig().clients;
  }

}
