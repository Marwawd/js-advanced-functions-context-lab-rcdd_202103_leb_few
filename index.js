function createEmployeeRecord(array=[firstname, familyname, title,  payrateperhour]){
let personinfo = {
firstName:array[0],
familyName:array[1],
title:array[2],
payPerHour:array[3],
timeInEvents:[],
timeOutEvents:[]
}
return personinfo;}
 function createEmployeeRecords(arrays){
   let t=[];
   for (let array in arrays)
  {
    t.push(createEmployeeRecord(array))
  }
  return t;
 }

 function createTimeInEvent(date){
   let date2=date.split(" ");
   let  type="TimeIn",
    hour= parseInt(date2[1],10),
    datee=date2[0]
    this.timeInEvents.push( {
     type:type,
     hour: hour,
     date:datee
   });
   return this;
 }
 function createTimeOutEvent(date){
   let date2=date.split(" ");
   let  type="TimeOut",
    hour= parseInt(date2[1],10),
    datee=date2[0]
    this.timeOutEvents.push( {
     type:type,
     hour: hour,
     date:datee
   });
   return this;
  }


 // function hoursWorkedOnDate(date){
 //   let out=this.timeOutEvents.find(person=> return person.date=date);
 //   let inn=this.timeInEvents.find(person=> return person.date=date);
 //   return (out.hour - inn.hour) /100
 // }
