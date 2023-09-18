const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended:true
}));

app.engine("html", require("ejs").renderFile); //Seta a engine do ejs para renderizar html
app.set("view engine", "html"); //seta a view engine para html
app.use("/public", express.static(path.join(__dirname, "public"))); //diz que tudo q é statico vai ficar na pagina publica
app.set("views", path.join(__dirname, "views")); //diz onde estão as views

var tarefas = ['Arrumar o quarto', 'Comprar no supercado'];


app.get("/", (req, res) => {
  res.render("index", { tarefasList:tarefas }); //objeto enviando dados parra o index.html
});

app.get('/deletar/:id',(req, res)=>{
    tarefas = tarefas.filter(function(val,index){
        if(index!= req.params.id){
            return val;
        }
    })
    res.render('index',{tarefasList:tarefas})
})

app.post('/',(req,res)=>{
    tarefas.push(req.body.tarefas);
    res.render('index',{tarefasList:tarefas})
})

app.listen(5000, () => {
  console.log("server rodando!");
});
