let nowMonth = new Date();
let today = new Date();

// 달력 생성 메서드.
function buildCalendar() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[nowMonth.getMonth()];
    console.log(month);

    // 이번 달의 1일
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    // console.log(`firstDate : ${firstDate}`);
    // console.log(nowMonth.getMonth());
    // -> 오늘 날짜 기준 년도, 월의 1일 !

    // 이번 달의 마지막일 (0)
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth()+1, 0);
    // console.log(`LastDate : ${lastDate}`);

    let tbody = document.querySelector("tbody");
    document.getElementById("cal-year").innerText = nowMonth.getFullYear();
    // document.getElementById("cal-month").innerText = month;
    document.getElementById("cal-month").textContent = month;
    console.log(month)
    
    // nowMonth.getMonth()+1;
    // ex) 다음 달로 넘어갔을 경우, 이전 출력 결과가 남아있을 수 있으니 초기화 한다.
    while (tbody.rows.length > 0) {  
        tbody.deleteRow(tbody.rows.length - 1);
    }

    // 첫번 째 행 추가
    let nowRow = tbody.insertRow();

    // 1일 시작 전까지 빈 열 추가
    for(let j = 0; j < firstDate.getDay(); j++) {
        let nowColumn = nowRow.insertCell();
    }

    // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복 
    // Ex) .setDate(13) : 객체를 13일로 변경 
    // nowDay.setDate(nowDay.getDate()+1) : ex) nowDay가 1일일 경우 1일의 다음날인 2일로 
    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate()+1)) {
        let nowColumn = nowRow.insertCell(); // 새로운 열 추가
        nowColumn.innerHTML = nowDay.getDate();
        nowColumn.innerHTML = "<div class='date'>"+nowDay.getDate()+"</div><div class='contents'><div>";

       // 일요일 : 빨간색, 토요일 : 파란색
       if(nowDay.getDay() == 0){
        nowColumn.style.color = "tomato";
       } else if(nowDay.getDay() == 6) {
        nowColumn.style.color = "royalblue";
        nowRow = tbody.insertRow(); // 토요일일 경우 다음으로 넘어가야 하므로 다시 열 추가
       }
    
    }

}


// 이전달 버튼 클릭
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
    console.log(nowMonth);
}

buildCalendar();


// 모달 
const closeBtn = document.getElementById('line-box');
const modal = document.getElementById('modalWrap');
const thead = document.getElementsByTagName('thead');
console.log();
let selectDt;
let selectDay;

$("td").click(function() {
    modal.style.display = 'block';
    console.log($(this).children('.date').text());
    textDt = $(this).children('.date').text();
    selectDt = this;
    console.log(`선택된 날짜 변수 : ${selectDt}`);
   
})

console.log($(selectDt).children('.date').text());
closeBtn.onclick = function() {
    modal.style.display = 'none';
}


const pleasureBtn = document.getElementById('pleasure');
const sadBtn = document.getElementById('sad');
const happyBtn = document.getElementById('happy');
const angryBtn = document.getElementById('angry');
const proudBtn = document.getElementById('proud');
const writeModal = document.getElementById('modalWrap-2');



// 기쁨 이모티콘 눌렀을 때 작성 모달 
    pleasureBtn.onclick = function() {
        modal.style.display = 'none'; // 처음 이모지 모달은 없애기

        writeModal.style.display = 'block'; // 작성 모달
        $('#img-box').append(`<img class="in-modal-imoticon" src="../img/기쁨.png" />`);
        $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
        setImg("pleasure");
    }


// 슬픔 이모티콘
    sadBtn.onclick = function() {
        modal.style.display = 'none';
        writeModal.style.display = 'block';
        $('#img-box').append(`<img class="in-modal-imoticon" src="../img/슬픔.png" />`);
        $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
        setImg("sad");
    }

// 행복 이모티콘
    happyBtn.onclick = function() {
        modal.style.display = 'none';;
        writeModal.style.display = 'block';
        $('#img-box').append(`<img class="in-modal-imoticon" src="../img/행복.png" />`);
        $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
        setImg("happy");
    }

// 화남 이모티콘
    angryBtn.onclick = function() {
        modal.style.display = 'none';
        writeModal.style.display = 'block';
        $('#img-box').append(`<img class="in-modal-imoticon" src="../img/화남.png" />`);
        $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
        setImg("angry");
    }

// 뿌듯 이모티콘
    proudBtn.onclick = function() {
        modal.style.display = 'none';
        writeModal.style.display = 'block';
        $('#img-box').append(`<img class="in-modal-imoticon" src="../img/뿌듯.png" />`);
        $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
        setImg("proud");
    }


    $(".diary-box").keydown(function(e) { // 누르는 순간
        if (e.keyCode === 13) {
            writeModal.style.display = "none";
            let imgBox = document.getElementById('img-box');
            let inImg = document.querySelector('.in-modal-imoticon');
            let modalDt = document.getElementById('modal-date');
            let selDt = document.querySelector('.select-dt');

            modalDt.removeChild(selDt);
            imgBox.removeChild(inImg);
            $(".input-title").val("");
            $(".diary-box").val("");

        }
    })

function setImg(img) {
    if(img == "pleasure") {
        $(selectDt).children('.contents').append(`<img src="../img/기쁨.png" />`);
    } else if (img == "sad") {
        $(selectDt).children('.contents').append(`<img src="../img/슬픔.png" />`);
    } else if (img == "happy") {
        $(selectDt).children('.contents').append(`<img src="../img/행복.png" />`);
    } else if (img == "angry") {
        $(selectDt).children('.contents').append(`<img src="../img/화남.png" />`);
    } else if (img == "proud") {
        $(selectDt).children('.contents').append(`<img src="../img/뿌듯.png" />`);
    } 
}