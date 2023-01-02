import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'su-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-survey';

  constructor(private api: GetApiService) { }

  ngOnInit() {
    this.api.callApi().subscribe((data) => {
      console.warn('Get Api Data', data);
    })
  }
}
