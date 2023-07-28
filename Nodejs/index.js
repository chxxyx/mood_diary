const express = require('express');
//= import express from 'espress'

const app =express();
const PORT = 8008;

app.set('view engine','ejs');
app.set("views",'./views');

//이렇게 쓰세유

//정적인 파일 불러오기

app.use('/public',express.static('./public'));
// app.use('/',express.static('./public'))
// app.use('/',express.static(''))



//경로를 지정하주기

app.get('/',(req,res)=>{
    // res.send("Hello Express")
       
    //send() 클라이언트에 응답 데이터를 보낼 때 no
    res.send({result:true, code:1000, message:'회원가입성공',data : {name:'yk'}});

})


//get : http 통신을 나타냄
//send :문자열 데이터를 보낸다 따라서 hello express로 뜸
//localhost : 8000/ 뒤에 없으면 무시 
//req res순서 주의 
app.get('/kdt9',(req,res)=>{
    res.render('test',{num:[2,3,4,5,6,7,8,9]})
    // res.render('test')
    //test라는 파일을 알아서 찾음
    // res.send("Hello kdt9")

})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
