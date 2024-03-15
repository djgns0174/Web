const homeButton = document.getElementById('home');
const todayHtml = document.getElementById('today');

function onhomeButtonClick(event){
    event.preventDefault();
    window.location.href = "index.html"
}

homeButton.addEventListener("click", onhomeButtonClick);

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

const footBallRecordRow = document.querySelector(".footBallRecord");
const runningRecordRow = document.querySelector(".runningRecord");
const healthRecordRow = document.querySelector(".healthRecord");

const footBallDataString = localStorage.getItem(`FootBall ${day}`);
const footBallData = JSON.parse(footBallDataString);
if (localStorage.getItem(`FootBall ${day}`)) {
    footBallRecordRow.parentElement.querySelector(`#${footBallData.day}`).innerHTML = "O";
}

const runningDataString = localStorage.getItem(`Running ${day}`);
const runningData = JSON.parse(runningDataString);
if (localStorage.getItem(`Running ${day}`)) {
    runningRecordRow.parentElement.querySelector(`#${runningData.day}`).innerHTML = "O";
}

const healthDataString = localStorage.getItem(`Health ${day}`);
const healthData = JSON.parse(healthDataString);
if (localStorage.getItem(`Health ${day}`)) {
    healthRecordRow.parentElement.querySelector(`#${healthData.day}`).innerHTML = "O";
}

if (localStorage.getItem(`FootBall ${day}`)){
    footBallRecordRow.parentElement.querySelector(`#${footBallData.day}`).addEventListener("click", function(event){
        if(event.target.innerHTML == "O"){
            alert(
                `
                활동량 : ${footBallData.distance}\n
                시간 : ${footBallData.time}\n
                골 : ${footBallData.goal}\n
                어시스트 : ${footBallData.assist}\n
                부상 : ${footBallData.injury}\n
                만족도 : ${footBallData.good}\n
                `
                );
        }
    });
}

if (localStorage.getItem(`Running ${day}`)){
    runningRecordRow.parentElement.querySelector(`#${runningData.day}`).addEventListener("click", function(event){
        if(event.target.innerHTML == "O"){
            alert(
                `
                활동량 : ${runningData.distance}\n
                시간 : ${runningData.time}\n
                부상 : ${runningData.injury}\n
                만족도 : ${runningData.good}\n
                `
                );
        }
    });
}

if (localStorage.getItem(`Health ${day}`)){
    healthRecordRow.parentElement.querySelector(`#${healthData.day}`).addEventListener("click", function(event){
        if(event.target.innerHTML == "O"){
            let alertMessage = `
                시간 : ${healthData.time}\n
                부상 : ${healthData.injury}\n
                만족도 : ${healthData.good}\n`;
    
            // healthTable 배열의 각 요소에 대해 반복하여 정보를 출력
            healthData.healthTable.forEach((index) => {
                alertMessage += `
                운동종목 : ${index.sports}
                세트수 : ${index.sets}
                횟수 : ${index.numbers}\n`;
            });
    
            // 결과 출력
            alert(alertMessage);
        }
    });
}

//월요일 00:00:00 초 되면 기록표 초기화
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

if((day='월') && (hours)==0 && (minutes)==0 && (seconds)==0){
    localStorage.clear();
}