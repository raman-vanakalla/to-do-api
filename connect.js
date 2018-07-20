console.log('in connect.js');
const MongoClient=require('mongodb').MongoClient;
const mongo=require('mongodb');
const url='mongodb://raman:aarvie123@ds237445.mlab.com:37445/todos';
const database='todos';
const connect_prom=MongoClient.connect(url,{useNewUrlParser:true});

var db;
var col;
connect_prom.then((client,err)=>
	{
	    console.log('connected');
		if(!err)
		{
		    db=client.db(database);
		    col=db.collection('data');
		}
		else
		{
			console.log(err);
		}
	},(error)=>{
        console.log(error);
	});
exports.displayTodos=(callback)=>
	{
       
       const array=col.find({}).toArray();
       array.then((data,err)=>
       {
        	  callback(data);
       });
	}

exports.insertTodo=(data,callback)=>
	{
		data.done=false;
		data.date=new Date();
        const info_prom=col.insertOne(data);
        info_prom.then((result,err)=>
	        {
	        	callback(err||result);
	        });
	}

exports.updateTodo=(id,data,callback)=>
	{
		const info_prom=col.findOneAndUpdate({_id:new mongo.ObjectId(id)},data);
		info_prom.then((result,err)=>
		   {
               callback(err||result);
		   }) ;
	}

exports.deleteTodo=(id,callback)=>
	{
		const info_prom=col.findOneAndDelete({_id:new mongo.ObjectId(id)});
		info_prom.then((result,err)=>
			{
                callback(err||result);
			})
	}