import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private date = new Date();

  constructor() { }

	getDateTimeWithFormatCurrent()
	{
		let year = this.date.getFullYear();
		let month = this.getFullMonth();
		let day = this.getFullDay();
		let hour = this.date.getHours();
		let minute = this.getFullMinutes();
		return day+"-"+month+"-"+year+" "+hour+":"+minute;
	}

	getFullMonth()
	{
		let month = this.date.getMonth();
		if( month.toString().length == 2 )
		{
			return (month+1).toString();
		}else{
			return "0"+(month+1).toString();
		}
	}

	getFullDay()
	{
		let day = this.date.getDate();
		if( day.toString().length == 2 )
		{
			return (day+1).toString();
		}else{
			return "0"+(day+1).toString();
		}
  }

  getFullMinutes()
  {
		let minute = this.date.getMinutes();
		if( minute.toString().length == 2 )
		{
			return minute.toString();
		}else{
			return "0"+(minute).toString();
		}
  }

}
