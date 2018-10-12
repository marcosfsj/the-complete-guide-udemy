import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'the-complete-guide-udemy';
  loadedFeature = 'recipes';

  onNavegate(feature: string) {
    this.loadedFeature = feature;
  }

}
