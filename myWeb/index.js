const todayHtml = document.getElementById('today');

let todayValue = new Date();   

let year = todayValue.getFullYear(); // 년도
let month = todayValue.getMonth() + 1;  // 월
let date = todayValue.getDate();  // 날짜
let day = todayValue.getDay();  // 요일

switch(day){
    case 0:
        day = '일'; 
        break;
    case 1:
        day='월';
        break;
    case 2:
        day='화';
        break;
    case 3:
        day='수';
        break;
    case 4:
        day='목';
        break;
    case 5:
        day='금';
        break;
    case 6:
        day='토';
        break;
}

todayHtml.innerHTML=year+'. '+month+'. '+date+'. '+day;