'use strict'
import { Component, OnInit } from '@angular/core';

declare var require: any;
const ipify = require('ipify2');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'get-ip';

  ngOnInit(){
    this.getIp()
  }

  async getIp(){
    try {
      let ipv4 = await ipify.ipv4();
      if(ipv4) this.title=ipv4
    } catch (error) {
      console.log(error);
    }
    
  }
}
