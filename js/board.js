// 날짜
let date = new Date()
console.log(date);
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()-1
let hour = date.getHours()
let minutes = date.getMinutes()
let date2 = (`${month >=10 ? month : +month}.${day >=10 ? day :"0"+day}`)
document.getElementById("date2").innerHTML=date2

let date3 = (`${hour >=10 ? hour : "0"+hour}:${minutes >=10 ? minutes : "0"+minutes}`)
console.log(date3)
// function heart(){
//     const ht=$('.fa-heart');
    
  
//     if(ht.hasClass('redHeart')== true) {
//         $(".redHeart").attr("class", "fa-regular fa-heart heart")

//     } else if (ht.hasClass('heart')==true){
//         $(".heart").attr("class", "fa-solid fa-heart redHeart")
        
//     }
    
   
// }

 // 모든 div 요소에 대해 이벤트 리스너를 등록
 let hearts = document.querySelectorAll(".heart, .redHeart");
 hearts.forEach(function(i) {
     i.addEventListener("click", toggleHeart);
 });

 //  클릭한 div 요소에 클래스를 토글
 function toggleHeart(event) {
     let clickedhearts = event.currentTarget;
     clickedhearts.classList.toggle("fa-regular");
     clickedhearts.classList.toggle("fa-solid");
    //  clickedhearts.classList.toggle("fa-heart");
     clickedhearts.classList.toggle("heart");
     clickedhearts.classList.toggle("redHeart");
     
    
 }
 
 
    // let checkboxthis = document.getElementsByClassName("fa-circle-check")
    // checkboxthis.classList.toggle("ani");
 

 //textarea
 
