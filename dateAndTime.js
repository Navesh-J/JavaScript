const date=new Date();
const hh=date.getHours();
const mm=date.getMinutes();
const ss=date.getSeconds();
const dd=date.getDate();
const month=date.getMonth()+1;
const yy=date.getFullYear();
console.log("Time  "+hh,":"+mm,":"+ss)
console.log("Date "+dd,"/"+month,"/"+yy)