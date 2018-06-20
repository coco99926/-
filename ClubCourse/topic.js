var topic = [
    "人像攝影",
    "燈光使用的技巧",
    "閃光燈的使用",
    "國假假日",
    "戶外近距離攝影",
    "活動人像攝影"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0)
    startDate.setMinutes(0);
    startDate.setSeconds(0);    
}

setMonthAndDay(4,1);