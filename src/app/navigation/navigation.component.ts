import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: []
})
export class NavigationComponent {

  activeTab: string = 'home';


  getActiveTab(tabName: string){
    this.activeTab = tabName;
  }
}
