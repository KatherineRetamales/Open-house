import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(function() {
      $('.toggle').click(function() {
        $('.nav-item').toggleClass('slide-out');
        $('.hamburger-1').toggleClass('cross-right');
        $('.hamburger-2').toggleClass('cross-hide');
        $('.hamburger-3').toggleClass('cross-left');
        $('.wobble').addClass('ripple');
        setTimeout(function() {
          $('.wobble').removeClass('ripple');
        }, 1000);
      });
    });
  }
}
