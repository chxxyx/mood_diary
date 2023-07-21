

//호버시 떨리는 애니메이션 함수
const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classList.remove("vibration");
  }, 400);
}



// 필터 선택 함수
const items = $(".item")
function emtFilter(emt){
  if(emt=='all'){
    items.removeClass('d-none')
    $('.filterList *').css('color', 'rgb(77, 77, 77)');
    $('.filterList .all').css("color", "pink");
  }else{
    items.addClass('d-none')
    $(`.${emt}`).removeClass('d-none')
    $('.filterList *').css('color', 'rgb(77, 77, 77)');
    $(`.filterList .${emt}`).css("color", "pink");
  }
}

//<p>프론트엔드 프로젝트를 시작했다. 비전공자 4명이라 걱정이 앞섰다. 여자 3명이고 한분은 예비군을 가셨따...하지만 우리 조가 제일 예쁘게 만들 것이다. 나만 잘하면 될 것 같다. 앞에 조는 하루만에 뚝딱 뚝딱 만드는데 너무 잘해서 집중이 잘 안된다. 이것은 방해가 분명하다. 글을 길게 써서 스크롤이 내려가게 만들고 싶다. 지난주엔 비가 계속 왔는데 이번주엔 다행히 비는 안온다. 대신 엄청 덥다. 진짜 나오자마자 땀이 줄줄 난다. 같은 조 영경이는 오는데 한시간 반이나 걸린다. 나는 한시간 밖에 안걸린다. 감사하다. 끗.프론트엔드 프로젝트를 시작했다. 비전공자 4명이라 걱정이 앞섰다. 여자 3명이고 한분은 예비군을 가셨따...하지만 우리 조가 제일 예쁘게 만들 것이다. 나만 잘하면 될 것 같다. 앞에 조는 하루만에 뚝딱 뚝딱 만드는데 너무 잘해서 집중이 잘 안된다. 이것은 방해가 분명하다. 글을 길게 써서 스크롤이 내려가게 만들고 싶다. 지난주엔 비가 계속 왔는데 이번주엔 다행히 비는 안온다. 대신 엄청 덥다. 진짜 나오자마자 땀이 줄줄 난다. 같은 조 영경이는 오는데 한시간 반이나 걸린다. 나는 한시간 밖에 안걸린다. 감사하다. 끗.</p>


const modal = $('#modalWrap');
const closeBtn = $('#closeBtn');


//아이템 선택시 모달 보여주는 함수
function showModal(emt){
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/${emt}.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
}


//모달 종료
closeBtn.click(function () {
  modal.css('display','none');
  $('#img-box').empty();
})


$(window).click(function (event) {
  if (event.target == modal[0]) {
    modal.css('display', 'none');
    $('#img-box').empty();
  }
})
//카드 선택시 날짜 저장
