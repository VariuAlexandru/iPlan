import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public today = new Date();
  public selectedDate: any = new Date();


  public ngOnInit(){

  }



  public moveToDate(numberOfDays?: number,direction?: string){
    if(direction === 'left') {
      this.selectedDate = moment(this.selectedDate).subtract('days', numberOfDays ?? 0)
    } else if(direction === 'right') {
      this.selectedDate = moment(this.selectedDate).add('days', numberOfDays ?? 0)
    }
  }

  public getDay(numberOfDays?: any,method?: any, format?:string){
      if(method === 'add' ) return moment(this.selectedDate).add('days',numberOfDays ?? 0).format(format)
      if(method === 'substract' ) return moment(this.selectedDate).subtract('days',numberOfDays ?? 0).format(format)
       return moment(this.selectedDate).format(format)
  }

  public getMonth(){
    return moment(this.selectedDate).format('MMMM')
  }

}
