import express from 'express';

const app =express();

const PORT = 5000;

app.get ("/burger" , (req ,res)=>{

    res.json({
        name:"veg Burger" ,
        price:50
    })
})
app.get ("/pizza" , (req , res)=>{

    res.json({
        name:"veg pizza" ,
        price :100
    })
});

app.get ("/pasta" , (req , res)=>{
 res.json({
    name:"veg pasta" ,
    price : 150 
 })   
});

app.listen(PORT,()=>{
console.log('Server is running on port 5000');
})