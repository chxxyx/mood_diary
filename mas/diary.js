




//호버시 떨리는 애니메이션 함수
const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classList.remove("vibration");
  }, 400);
}



// 필터 선택 함수
const items = $(".item")
$('.filterList .happy').click(function () {
  items.addClass("d-none")
  $(".happy").removeClass("d-none")
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .happy').css("color", "pink");
})

$('.filterList .all').click(function () {
  items.removeClass('d-none')
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .all').css("color", "pink");

})
$('.filterList .sad').click(function () {
  items.addClass("d-none")
  $(".sad").removeClass("d-none")
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .sad').css("color", "pink");
})
$('.filterList .proud').click(function () {
  items.addClass("d-none")
  $(".proud").removeClass("d-none")
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .proud').css("color", "pink");
})
$('.filterList .pleasure').click(function () {
  items.addClass("d-none")
  $(".pleasure").removeClass("d-none")
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .pleasure').css("color", "pink");
})
$('.filterList .angry').click(function () {
  items.addClass("d-none")
  $(".angry").removeClass("d-none")
  $('.filterList *').css('color', 'rgb(77, 77, 77)');
  $('.filterList .angry').css("color", "pink");
})


// function emtFilter(emt){
//     console.log(emt)
//     const items = $(".item")
//     items.addClass("d-none")
//     $(emt).removeClass("d-none")

// }
//<p>프론트엔드 프로젝트를 시작했다. 비전공자 4명이라 걱정이 앞섰다. 여자 3명이고 한분은 예비군을 가셨따...하지만 우리 조가 제일 예쁘게 만들 것이다. 나만 잘하면 될 것 같다. 앞에 조는 하루만에 뚝딱 뚝딱 만드는데 너무 잘해서 집중이 잘 안된다. 이것은 방해가 분명하다. 글을 길게 써서 스크롤이 내려가게 만들고 싶다. 지난주엔 비가 계속 왔는데 이번주엔 다행히 비는 안온다. 대신 엄청 덥다. 진짜 나오자마자 땀이 줄줄 난다. 같은 조 영경이는 오는데 한시간 반이나 걸린다. 나는 한시간 밖에 안걸린다. 감사하다. 끗.프론트엔드 프로젝트를 시작했다. 비전공자 4명이라 걱정이 앞섰다. 여자 3명이고 한분은 예비군을 가셨따...하지만 우리 조가 제일 예쁘게 만들 것이다. 나만 잘하면 될 것 같다. 앞에 조는 하루만에 뚝딱 뚝딱 만드는데 너무 잘해서 집중이 잘 안된다. 이것은 방해가 분명하다. 글을 길게 써서 스크롤이 내려가게 만들고 싶다. 지난주엔 비가 계속 왔는데 이번주엔 다행히 비는 안온다. 대신 엄청 덥다. 진짜 나오자마자 땀이 줄줄 난다. 같은 조 영경이는 오는데 한시간 반이나 걸린다. 나는 한시간 밖에 안걸린다. 감사하다. 끗.</p>

const pleasureBtn = $('.item.pleasure');
const sadBtn = $('.item.sad');
const happyBtn = $('.item.happy');
const angryBtn = $('.item.angry');
const proudBtn = $('.item.proud');
// const writeModal = $('');


function setImg(img) {
  if (img == "pleasure") {
    $(selectDt).children('.contents').append(`<img src="./.img/기쁨.png" />`);
  } else if (img == "sad") {
    $(selectDt).children('.contents').append(`<img src="./.img/슬픔.png" />`);
  } else if (img == "happy") {
    $(selectDt).children('.contents').append(`<img src="./.img/행복.png" />`);
  } else if (img == "angry") {
    $(selectDt).children('.contents').append(`<img src="./.img/화남.png" />`);
  } else if (img == "proud") {
    $(selectDt).children('.contents').append(`<img src="./.img/뿌듯.png" />`);
  }
}


const modal = $('#modalWrap');
const closeBtn = $('#closeBtn');


// 기쁨 이모티콘 눌렀을 때 작성 모달 
pleasureBtn.click(function () {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/기쁨.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
  // setImg("pleasure");
});


// 슬픔 이모티콘
sadBtn.click(function () {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/슬픔.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
  setImg("sad");
})

// 행복 이모티콘
happyBtn.click(function () {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/행복.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
  setImg("happy");
})

// 화남 이모티콘
angryBtn.click(function () {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/화남.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
  setImg("angry");
})

// 뿌듯 이모티콘
proudBtn.click(function () {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/뿌듯.png" />`);
  $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
  setImg("proud");
})

//모달 종료
closeBtn.click(function () {
  modal.css('display','none');
  $('#img-box').empty();
})

// closeBtn.addEventListener("click", e => { modal.style.display = "none" });

$(window).click(function (event) {
  if (event.target == modal[0]) {
    modal.css('display', 'none');
    $('#img-box').empty();
  }
})
//카드 선택시 날짜 저장
