import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  report: Object;
  constructor(private http: HttpClient) {
    http.get('assets/report.json').subscribe(report => this.report = report)
  }
}
