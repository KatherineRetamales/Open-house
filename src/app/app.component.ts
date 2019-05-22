import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private platform: any;

  @ViewChild('map')
  public mapElement: ElementRef;

  public ngOnInit() {}
}
