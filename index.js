const express = require('express');
const path = require('path');
const app = express();

app.engine('html',require('ejs').renderFile);//Seta a engine do ejs para renderizar html
app.set('view engine', 'html');//seta a view engine para html
app.use('/public', express.static(path.join(__dirname, 'public')));//diz que tudo q é statico vai ficar na pagina publica
app.set('views', path.join(__dirname,'views'));//diz onde estão as views

app.get('/',(req,res)=>{

  res.render('index',{nome:'gustavo'}); //objeto enviando dados parra o index.html

})

app.listen(5000 , ()=>{
    console.log('server rodando!');
})