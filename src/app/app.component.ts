import { Component } from '@angular/core';
import { HereService } from 'src/here.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public query: string;
  public position: string;
  public locations: Array<any>;

  public constructor(private here: HereService) {}

  public getAddress() {
    if (this.query !== '') {
      this.here.getAddress(this.query).then(
        result => {
          this.locations = result as Array<any>;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public getAddressFromLatLng() {
    if (this.position !== '') {
      this.here.getAddressFromLatLng(this.position).then(
        result => {
          this.locations = result as Array<any>;
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
