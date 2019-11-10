import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UProject';
  featureLoad = "recipe";

  onNavigate(featureSelected: string){
    this.featureLoad = featureSelected;
  }
}
