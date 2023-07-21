
let date = new Date()
console.log(date);
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()-1
let date2 = (`${month >=10 ? month : +month}.${day >=10 ? day :"0"+day}`)
document.getElementById("date2").innerHTML=date2

function heart(){
    $(".heart").attr("class", "fa-solid fa-heart redHeart")
}
function heart2(){
    $(".heart").attr("class", "fa-regular fa-heart heart")
}