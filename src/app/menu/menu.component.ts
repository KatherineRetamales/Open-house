import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    jQuery(function($) {
      $('.page-wrapper').removeClass('toggled');
      $('.sidebar-dropdown > a').click(function() {
        $('.sidebar-submenu').slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass('active')
        ) {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .parent()
            .removeClass('active');
        } else {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .next('.sidebar-submenu')
            .slideDown(200);
          $(this)
            .parent()
            .addClass('active');
        }
      });

      $('#close-sidebar').click(function() {
        $('.page-wrapper').removeClass('toggled');
      });
      $('#show-sidebar').click(function() {
        $('.page-wrapper').addClass('toggled');
      });
    });
  }
}
