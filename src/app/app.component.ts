import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any =  {
    'name': 'Luis',
    'age': 33
  };
  constructor( private translate: TranslateService ) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use( language );
  }
}
