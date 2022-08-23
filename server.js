var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))

app.set('view engine', 'ejs')

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/resume',(req,res)=>{
    res.render('resume')
})

app.use((req,res) => {
    res.status(404).render('404')
})


app.listen(PORT,()=>{
console.log(`Server sorunsuz çalışmaktadır...`);
})