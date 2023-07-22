// 날짜
let date = new Date()
console.log(date);
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()-1
let date2 = (`${month >=10 ? month : +month}.${day >=10 ? day :"0"+day}`)
document.getElementById("date2").innerHTML=date2

// function heart(){
//     const ht=$('.fa-heart');
    
  
//     if(ht.hasClass('redHeart')== true) {
//         $(".redHeart").attr("class", "fa-regular fa-heart heart")

//     } else if (ht.hasClass('heart')==true){
//         $(".heart").attr("class", "fa-solid fa-heart redHeart")
        
//     }
    
   
// }

 // 모든 div 요소에 대해 이벤트 리스너를 등록
 var hearts = document.querySelectorAll(".fa-heart");
 hearts.forEach(function(i) {
     i.addEventListener("click", toggleHeart);
 });

 // 이 함수는 클릭한 div 요소에 클래스를 토글
 function toggleHeart(event) {
     var clickedhearts = event.currentTarget;
     clickedhearts.classList.toggle("fa-regular");
     clickedhearts.classList.toggle("fa-solid");
    //  clickedhearts.classList.toggle("fa-heart");
     clickedhearts.classList.toggle("heart");
     clickedhearts.classList.toggle("redHeart");
 }
