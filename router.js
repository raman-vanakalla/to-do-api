console.log('in router.js');
const express=require('express');
const interact=require('./connect.js')
const router=express.Router();



router.get('/todos',(req,res)=>
	{
		interact.displayTodos((data)=>{res.send(data)});
	});

router.post('/add',(req,res)=>
	{
        console.log(req.body);
        interact.insertTodo(req.body,(data)=>{res.send(data)});
	});

router.put('/:id',(req,res)=>
	{
	    interact.updateTodo(req.params.id,req.body,(data)=>{res.send(data)});
	});

router.delete('/:id',(req,res)=>
	{
        interact.deleteTodo(req.params.id,(data)=>{res.send(data)});
	});


module.exports=router;