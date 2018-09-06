import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherdateService {

  dateRange = [];
  validIndex = [];
  warningMsg = '';
  dateValidation = 0;

  constructor() { }

  dateProcess(value:any[], val1:string, val2:string) {
    this.dateRange = [];
    this.warningMsg = '';

    if(val1 != 'N' && val2 != 'N'){
      this.dateValidation = 1;

      var sDate = new Date(val1);
      var eDate = new Date(val2);
      
      if(sDate > eDate){
        this.dateValidation = 2;
      }

      if(this.dateValidation == 1){
        this.dateRange[0] = this.myFormatDate(sDate.toString());

        for(var i = 1, goal = (eDate.getDate() - sDate.getDate()); i <= goal ; i++){
          sDate.setDate(sDate.getDate()+1);
          this.dateRange[i] = this.myFormatDate(sDate.toString());
        }
        this.validDates(value);
      }else if(this.dateValidation == 2){
        this.warningMsg = 'Warning: You have selected an End-Date prior to the Start-Date.';
      }
    }
  }

  validDates(value:any[]) {
    
    this.validIndex = [];

    for(var i=0; i < value.length; i++){
      for(var j=0; j < this.dateRange.length; j++){
        if(this.myTrim(this.dateRange[j]) == this.myTrim(value[i])){
          this.validIndex.push(i);
        }
      }
    }
    console.log(this.validIndex);
  }

  myFormatDate(value:string) {
    let _day = '', _month = '', _year = '';

    _year = value.toString().substring(10,15);
    _day = value.toString().substring(8,10);
    _month = value.toString().substring(4,7);

    switch(_month){
      case 'Jan': _month = '01'; break;
      case 'Feb': _month = '02'; break;
      case 'Mar': _month = '03'; break;
      case 'Apr': _month = '04'; break;
      case 'May': _month = '05'; break;
      case 'Jun': _month = '06'; break;
      case 'Jul': _month = '07'; break;
      case 'Aug': _month = '08'; break;
      case 'Sep': _month = '09'; break;
      case 'Oct': _month = '10'; break;
      case 'Nov': _month = '11'; break;
      case 'Dic': _month = '12'; break;
    }

    return _year + '-' + _month + '-' + _day;
  }

  myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }
}
