
let date = new Date()
console.log(date);
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()-1
let date2 = (`${year}-${month >=10 ? month : "0"+month}-${day >=10 ? day :"0"+day}`)
document.getElementById("date2").innerHTML=date2

