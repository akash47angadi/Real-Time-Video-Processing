express=require("express")
fileupload=require("express-fileupload")
var bodyParser = require("body-parser");
app=express();
http = require("http")
url = require("url")
app.use(fileupload())
path=require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoclient=require("mongodb").MongoClient
mongoclient.connect("mongodb://localhost:27017",function(err, client){
			db = client.db("profile_details")
})

app.get("/login",function(req,res){
   res.sendFile(path.join(__dirname,'/mylogin.html'));
})


app.post("/loginsubmit",function(req,res){
	//console.log(req.body)
	name=req.body.uname;
	password=req.body.password;
	db.collection("users").findOne({"name":name,"password":password},function(err,results){
		console.log(results);
		const resu=JSON.parse(JSON.stringify(results));
		const obj = JSON.parse(JSON.stringify(req.body));
		//console.log(obj["uname"])
		//console.log(obj["password"])
		//console.log(resu["name"])
		//console.log(resu["password"])
		if(resu==null){
			res.sendFile(path.join(__dirname,'/mysignup.html'))
			
		}
		else{	
		if(obj["uname"]==JSON.parse(JSON.stringify(results["name"])) && obj["password"]==JSON.parse(JSON.stringify(results["password"])))
		      res.sendFile(path.join(__dirname,'/main.html'));
		else
			  res.sendFile(path.join(__dirname,'/mysignup.html'))
		}
		})
	
		
		  // res.sendFile(path.join(__dirname,'/mysignup.html'));
	
})

app.get("/signup",function(req,res){
   res.sendFile(path.join(__dirname,'/mysignup.html'));
})


app.post("/signupsubmit",function(req,res){
	name=req.body.uname;
	password1=req.body.password1;
	password2=req.body.password2;
	if(password1==password2){
		db.collection("users").insertOne({"name":name,"password":password1},function(err){
			console.log("document inserted successfully")
			res.sendFile(path.join(__dirname,'/main.html'));
			})
			}
	else
		res.sendFile(path.join(__dirname,'/mysignup.html'));
	
})

app.use(express.static(path.join(__dirname,'vidupload')))
app.use(express.static('files'))


	

app.get("/Home",function(req,res){
	res.sendFile(path.join(__dirname, '/main.html'));
})

app.get("/iv",function(req,res){
	res.sendFile(path.join(__dirname, '/iv.html'));
})

app.get("/vv",function(req,res){
	res.sendFile(path.join(__dirname , '/vv.html'));
})

app.get("/rv",function(req,res){
	res.sendFile(path.join(__dirname, '/rv.html'));
})








app.get("/form1",function(req,res){
	res.sendFile(__dirname+"/bg_img_to_video.html")	

app.post("/upload",function(req,res){
	//console.log(req.files)
    if(!req.files)
        return res.status(404).send("file not available for server side")
    ufile1=req.files.ufile1;
	ufile2=req.files.ufile2;
ufile1.mv("./vidupload/"+ufile1.name,function(err)
	{
		//if(err)
			//return   res.status(400).send("path not available")
		
		
		console.log("ufile"+err)
		
	})
ufile2.mv("./vidupload/"+ufile2.name,function(err)
	{
		
		//if(err)
			//return   res.status(400).send("path not available")
		
		
		console.log("ufile"+err)
		res.sendFile(path.join(__dirname+"/vv.html"))	
	//res.end(__dirname,"/iv.html")
	})
	
	})
	})








	app.get("/form2",function(req,res){
		res.sendFile(__dirname+"/uploadsupp2.html")	
	
	app.post("/upload2",function(req,res){
		//console.log(req.files)
		if(!req.files)
			return res.status(404).send("file not available for server side")
		ufile1=req.files.ufile1;
		ufile2=req.files.ufile2;
	ufile1.mv("./vidupload/"+ufile1.name,function(err)
		{
			//if(err)
				//return   res.status(400).send("path not available")
			
			
			console.log("ufile"+err)
			
		})
	ufile2.mv("./vidupload/"+ufile2.name,function(err)
		{
			
			//if(err)
				//return   res.status(400).send("path not available")
			
			
			console.log("ufile"+err)
			res.sendFile(path.join(__dirname+"/iv.html"))	
		//res.end(__dirname,"/iv.html")
		})
		
		})
		})





		app.get("/form3",function(req,res){
			res.sendFile(__dirname+"/uploadsupp3.html")	
		
		app.post("/upload3",function(req,res){
			//console.log(req.files)
			if(!req.files)
				return res.status(404).send("file not available for server side")
			ufile1=req.files.ufile1;
			
		ufile1.mv("./vidupload/"+ufile1.name,function(err)
			{
				
				//if(err)
					//return   res.status(400).send("path not available")
				
				
				console.log("ufile"+err)
				res.sendFile(path.join(__dirname+"/rv.html"))	
			//res.end(__dirname,"/iv.html")
			})
			
			})
			})
app.listen(8080,function(){
	console.log("SERVER ON")
});