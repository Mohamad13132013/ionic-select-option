import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Events, PopoverController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from './../../services/shared/globals';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.html',
  styleUrls: ['./sample.scss'],
})
export class Sample implements OnInit {

  selectedMonth: any;
  months = [
    {id:0,name:"January"},
    {id:1,name:"February"},
    {id:2,name:"March"},
    {id:3,name:"April"},
    {id:4,name:"May"},
    {id:5,name:"June"},
    {id:6,name:"July"},
    {id:7,name:"August"},
    {id:8,name:"September"},
    {id:9,name:"October"},
    {id:10,name:"November"},
    {id:11,name:"December"}
  ];
  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.months.filter(month=>month.id== new Date().getMonth());
    console.log("current month : "+JSON.stringify(this.selectedMonth));
    
  }

  monthSelected(){
    console.log("selected month : "+JSON.stringify(this.selectedMonth));
  }

}
