//UC1 check employee present or absent
const Is_Absent =0;

let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck == Is_Absent){
    console.log("UC1 - employee is Absent");
}else{
    console.log("UC1 - employee is present");
}

//UC2 employee wage per hours and fulltime hours
const IS_FULL_TIME =2;
const IS_PART_TIME =1;
const WAGE_PER_HOURS = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
let EMP_HOURS = 0

    switch(empcheck){
        case IS_FULL_TIME:
            console.log("Employee is working full time");
            EMP_HOURS = FULL_TIME_HOURS;
            break
        case IS_PART_TIME:
            console.log("employee is working part time");
            EMP_HOURS = PART_TIME_HOURS;
            break;
        default:
            EMP_HOURS = 0;
            break;
    }

    let EMPWAGE = EMP_HOURS*WAGE_PER_HOURS;
    console.log("Employee wages:"+EMPWAGE);

//UC4 switch statement
function getWorkingHours(empcheck) {
    switch(empcheck){
        case IS_FULL_TIME:
            console.log("Employee is working full time");
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            console.log("employee is working part time");
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}

EMPWAGE = WAGE_PER_HOURS*getWorkingHours(empcheck);
console.log("Employee wages:" + EMPWAGE+"\n")
//UC5 calculating total wage per month
const WORKING_DAYS_PER_MONTH =20;
for(let day=0 ;day<WORKING_DAYS_PER_MONTH; day++)
{
    let empcheck = Math.floor(Math.random()*10)%3;
    EMP_HOURS +=getWorkingHours(empcheck);
}
ONE_EMPWAGES = WAGE_PER_HOURS* EMP_HOURS;
console.log('Total working hours in month:'+ EMP_HOURS);
console.log("Total employee wages"+ONE_EMPWAGES);

//UC6 total employee wages,hours,months
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS_PER_MONTH =20;
let Total_EMP_HOURS = 0;
let Total_Working_Days = 0;

while(Total_EMP_HOURS<MAX_WORKING_HOURS && Total_Working_Days<MAX_WORKING_DAYS_PER_MONTH)
{
    Total_Working_Days++;
    let empcheck = Math.floor(Math.random()*10)%3;
    Total_EMP_HOURS += getWorkingHours(empcheck);
}
let Total_EMP_WAGES =WAGE_PER_HOURS*Total_EMP_HOURS;
console.log("TotalWorkingDays:"+Total_Working_Days);
console.log("TotalWorkingHours:"+Total_EMP_HOURS);
console.log("TotalEmpWages:"+Total_EMP_WAGES);
