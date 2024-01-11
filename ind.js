var inpyear,inpmonth,inpday,inphours,inpminutes,inpseconds;
inpyear=parseInt(prompt("Enter year:"))
inpmonth=parseInt(prompt("Enter month"))
inpday=parseInt(prompt("Enter day:"))
inphours=parseInt(prompt("Enter hours"));
inpminutes=parseInt(prompt("Enter minutes:"));
inpseconds=parseInt(prompt("Enter seconds:"))
function calculate_time(){
const months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const birthdate=new Date(inpyear,inpmonth,inpday,inphours,inpminutes,inpseconds)
const byear=birthdate.getFullYear()
const bmonth=months[birthdate.getMonth()]
const bday=weekdays[birthdate.getDay()]
const bhours=birthdate.getHours()
const bminutes=birthdate.getMinutes()
const bseconds=birthdate.getSeconds()
const bmilliseconds=birthdate.getTime()


const todaydate=new Date()
const tyear=todaydate.getFullYear()
const tmonth=months[todaydate.getMonth()]
const tday=weekdays[todaydate.getDay()]
const thours=todaydate.getHours()
const tminutes=todaydate.getMinutes()
const tseconds=todaydate.getSeconds()
const tmilliseconds=todaydate.getTime()

const totalmilliseconds=bmilliseconds-tmilliseconds
//1s=1000ms
//1min=60*1000
//1hour=60*60*1000
//1day=24*60*60*1000;

const onesec=1000;
const onemin=60*1000
const onehour=60*60*1000
const oneday=24*60*60*1000

const totaldays=Math.floor(totalmilliseconds/oneday)
const totalhours=Math.floor((totalmilliseconds%oneday)/onehour)
const totalminutes=Math.floor((totalmilliseconds%onehour)/onemin)
const totalseconds=Math.floor((totalmilliseconds%onemin)/onesec)

const daysbtn=document.getElementById("days")
const hoursbtn=document.getElementById("hours")
const minutesbtn=document.getElementById("minutes")
const secondsbtn=document.getElementById("seconds")

daysbtn.innerText=`${totaldays} days`
hoursbtn.innerText=`${totalhours} hours`
minutesbtn.innerText=`${totalminutes} minutes`
secondsbtn.innerText=`${totalseconds} seconds`
if(totalseconds<=0){
    expiry()
}

}
calculate_time()
const interval=setInterval(calculate_time,1000)

function expiry(){
    const content=document.getElementById('content')
    clearInterval(interval)
    content.innerHTML="<h3>date Expired</h3>"
}