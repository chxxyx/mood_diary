let items = $(".item")
let sum;
function countItem() {
  sum = 0;
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].classList.contains('d-none'))
    if (items[i].classList.contains('d-none')) {

    }
    else {
      sum += 1;
    }
  }
  console.log(sum)
  return sum
}

//월 선택 필터 함수
let selectMonth = '';
let selMonthClass = '.allM'; //월선택 클래스 반환
let months = $('.diaryMonth');
function monthFilter(mon) {
  if (mon == 'allM') { //2023 선택시 
    items.addClass('d-none') //모든 일기 d-none(이전 필터 초기화)
    items.removeClass('d-none') //모든 일기 보이게
    $('.monthSel *').css('color', 'rgb(77, 77, 77)') //2023
    $('.monthSel #all').css('color', 'pink')
  } else {
    items.addClass('d-none')
    if (months.hasClass(`${mon}`))
      $(`.${mon}`).parent('.item').removeClass('d-none');
    $('.monthSel *').css('color', 'rgb(77, 77, 77)')
    $(`.monthSel #${mon}`).css('color', 'pink')
  }
  selectMonth = `${mon}`
  selMonthClass = `.${mon}`;
}





//기분 선택 필터 함수

function emtFilter(emt) {


  if (selMonthClass == '.allM') {
    if (emt == 'all') {
      items.removeClass('d-none')
      $('.filterList *').css('color', 'rgb(77, 77, 77)');
      $('.filterList .allm').css("color", "pink");
    }
    else {
      items.addClass('d-none')
      $(`.${emt}`).removeClass('d-none')
      $('.filterList *').css('color', 'rgb(77, 77, 77)');
      $(`.filterList .${emt}m`).css("color", "pink");
    }
  } else {
    if (emt == 'all') {
      $(selMonthClass).parent(items).removeClass('d-none')
      $('.filterList *').css('color', 'rgb(77, 77, 77)');
      $('.filterList .allm').css("color", "pink");
    } else {
      $(selMonthClass).parent(items).addClass('d-none')
      $(selMonthClass).parent(`.${emt}`).removeClass('d-none')
      $('.filterList *').css('color', 'rgb(77, 77, 77)');
      $(`.filterList .${emt}m`).css("color", "pink");
    }
  }
  let cntSum = countItem();

  if (cntSum == 0) {
    $('.myContainer').after(`<div class='noshow' style='text-align:center; padding:50px;font-size:20px; color:grey;'>작성된 일기가 없어요!😅</div>`);
  }else{
    $('.noshow').remove()
    console.log($('.myContainer').children('.noshow'))
  }
}




const modal = $('#modalWrap');
const closeBtn = $('#closeBtn');


//아이템 선택시 모달 보여주는 함수
function showModal(emt) {
  modal.css("display", "block")
  $('#img-box').append(`<img class="in-modal-imoticon" src="./img/${emt}.png" />`);
  // $('#modal-date').append(`<div class="select-dt">${textDt}</div>`);
}


//모달 종료
closeBtn.click(function () {
  modal.css('display', 'none');
  $('#img-box').empty();
})


$(window).click(function (event) {
  if (event.target == modal[0]) {
    modal.css('display', 'none');
    $('#img-box').empty();
  }
})

