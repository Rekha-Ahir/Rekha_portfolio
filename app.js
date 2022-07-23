const express= require('express');
const app= express();
const bodyparser=require('body-parser')
const path=require('path');

const port =process.env.PORT||8000
const static_path = path.join(__dirname,"../public/js/index.html");
app.use(express.static(static_path));
app.get('/', (req, res)=>{
   
    const params = {}
    res.status(200).render('index.html', params);
});
app.get("*",(req,res)=>{
    
    res.send("404 error page")
})

app.listen(port,()=>{
    console.log(`succesfully run at port${port}`)
})
