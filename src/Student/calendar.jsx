import dayjs from 'dayjs'
import React from 'react'

export const Calendar = (month=dayjs().month()
,year=dayjs().year()) => {
  const firstdate=dayjs().year(year).month(month).startOf("month");
  const lastdate=dayjs().year(year).month(month).endOf("month");
  const datedata=[];
  console.log(dayjs());
  console.log(typeof(dayjs().day()));
  for(let i=0;i<firstdate.day();i++){
    datedata.push({ currentMonth:false,date:firstdate.day(i)});
  }
  for(let i=firstdate.date();i<=lastdate.date();i++){
    datedata.push({ currentMonth:true,date:firstdate.date(i),
    today:firstdate.date(i).toDate().toDateString()===dayjs().toDate().toDateString(),});
  }
  const ramin=42-datedata.length
  for(let i=lastdate.day()+1;i<=lastdate.day()+ramin;i++){
    datedata.push( {currentMonth:false,date:lastdate.day(i)});
  }
  return datedata;
};

