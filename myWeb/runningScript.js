const distance = document.getElementById('distance');
const time = document.getElementById('time');
const injury = document.getElementById('injury');
const good = document.getElementById('good');
const saveButton = document.getElementById('save');
const homeButton = document.getElementById('home');

const todayHtml = document.getElementById('today');

let todayValue = new Date();   

let year = todayValue.getFullYear(); // 년도
let month = todayValue.getMonth() + 1;  // 월
let date = todayValue.getDate();  // 날짜
let day = todayValue.getDay();  // 요일

function onSaveButtonClick(event) {
    event.preventDefault();

    injury.value = injury.value.toUpperCase();
    if((injury.value != 'O') && (injury.value !='X')){
        alert("O, X를 입력해주세요")
        return;
    }

    const runningRecord = {
        day:day,
        distance:distance.value,
        time : time.value,
        injury : injury.value,
        good : good.value
    };
    localStorage.setItem(`Running ${day}`, JSON.stringify(runningRecord));

    distance.value = "";
    time.value = "";
    injury.value = "";
    good.value = "";

    alert("Your record is saved");
    window.location.href = "myRecord.html";
}

function onhomeButtonClick(event){
    event.preventDefault();
    window.location.href = "index.html"
}

saveButton.addEventListener("click", onSaveButtonClick);
homeButton.addEventListener("click", onhomeButtonClick);

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