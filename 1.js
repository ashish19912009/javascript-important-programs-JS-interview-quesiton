const today = new Date();
const day = today.getDay();
const allDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(`Today is : ${allDay[day]}`);

let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const timeFormat = (hours >= 12) ? 'PM' : 'AM'
hours = (hours >= 12) ? hours - 12 : hours;

if(hours === 0 && timeFormat === 'PM')
    {
        if(minutes === 0 && seconds === 0)
        {
            hours = 12;
            timeFormat = 'Noon';
        }
        else{
            hours = 12;
        }    
    }

if(hours === 0 && timeFormat === 'AM')
{
    if(minutes === 0 && seconds === 0)
    {
        hours = 12;
        timeFormat = 'Midnight'
    } else{
        hours = 12;
    }
}

console.log(`Current time is : ${hours} ${timeFormat} : ${minutes} : ${seconds}`);