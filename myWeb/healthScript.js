const time = document.getElementById('time');
const injury = document.getElementById('injury');
const good = document.getElementById('good');
const sports = document.getElementById('sports');
const sets = document.getElementById('sets');
const numbers = document.getElementById('numbers');

const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');
const homeButton = document.getElementById('home');

const todayHtml = document.getElementById('today');

var tableIdx = 0;
function addRow() {
    tableIdx++;
    // table element 찾기
    const table = document.getElementById('healthTable');

    // 새 행(Row) 추가
    const newRow = table.insertRow();
    
    // 새 행(Row)에 Cell 추가
    const sportsCell = newRow.insertCell(0);
    const setsCell = newRow.insertCell(1);
    const numbersCell = newRow.insertCell(2);

    sportsCell.innerHTML = '<input type="text" class="sports" maxlength="10">';
    setsCell.innerHTML = '<input type="number" class="sets" maxlength="3">';
    numbersCell.innerHTML = '<input type="number" class="numbers" maxlength="3">';

    //추가된 행 css
    const sportsInput = sportsCell.querySelector('.sports');
    sportsInput.style.width = '180px';
    sportsInput.style.marginLeft = 'auto';
    sportsInput.style.marginRight = 'auto';

    const setsInput = setsCell.querySelector('.sets');
    setsInput.style.width = '50px';
    setsInput.style.marginLeft = 'auto';
    setsInput.style.marginRight = 'auto';

    const numbersInput = numbersCell.querySelector('.numbers');
    numbersInput.style.width = '50px';
    numbersInput.style.marginLeft = 'auto';
    numbersInput.style.marginRight = 'auto';
}

function removeRow(rownum){
    if(tableIdx == 0){
        alert("더 이상 지울 수 없습니다.");
        return;
    }
    
    tableIdx--;
    const table = document.getElementById('healthTable');

    table.deleteRow(rownum);
}

function onSaveButtonClick(event) {
    event.preventDefault();

    injury.value = injury.value.toUpperCase();
    if((injury.value != 'O') && (injury.value !='X')){
        alert("O, X를 입력해주세요")
        return;
    }

    const healthRecord = {
        day:day,
        time:time.value,
        injury : injury.value,
        good : good.value,
        healthTable:[]
    };

    const sportsElements = document.querySelectorAll('.sports');
    const setsElements = document.querySelectorAll('.sets');
    const numbersElements = document.querySelectorAll('.numbers');

    sportsElements.forEach((sportsElement, index) => {
        const healthTableRecord = {
            sports: sportsElement.value,
            sets: setsElements[index].value,
            numbers: numbersElements[index].value
        };
        healthRecord.healthTable.push(healthTableRecord);
    });

    localStorage.setItem(`Health ${day}`, JSON.stringify(healthRecord));

    time.value = "";
    injury.value = "";
    good.value = "";

    alert("Your record is saved");
    window.location.href = "myRecord.html";
}

function onhomeButtonClick(event){
    event.preventDefault();
    window.location.href = "index.html";
}

saveButton.addEventListener("click", onSaveButtonClick);
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