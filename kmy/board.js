
let date = new Date()
console.log(date);
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()-1
let date2 = (`${month >=10 ? month : +month}.${day >=10 ? day :"0"+day}`)
document.getElementById("date2").innerHTML=date2

function heart(){
    const ht=$('.fa-heart');
  
    if(ht.hasClass('redHeart')== true) {
        $(".redHeart").attr("class", "fa-regular fa-heart heart")
        console.log('빈하트')
    } else if (ht.hasClass('heart')==true){
        $(".heart").attr("class", "fa-solid fa-heart redHeart")
        console.log('빨간하트')
    }
    
   
}
function heart2(){
  
}