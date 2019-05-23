import { Component, OnInit } from '@angular/core';
import { HereService } from 'src/here.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public query: string;
  public position: string;
  public locations: Array<any>;

  public start: string;
  public finish: string;

  public constructor(private here: HereService,private spinner: NgxSpinnerService) {
    this.start = "-33.5600906,-70.6332687";
    this.finish = "-33.6299234,-70.5918625";
  }

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

  public ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
 
}

