express=require("express")
fileupload=require("express-fileupload")
app=express();
app.use(fileupload())
//app.get("/bg_img_to_video.html",function(req,res){
    // res.sendFile(__dirname+"/bg_img_to_video.html")


//})
app.get("/form",function(req,res){
	res.sendFile(__dirname+"/bg_img_to_video.html")	
app.post("/upload",function(req,res){
	console.log(req.files)
    if(!req.files)
        return res.status(404).send("file not available for server side")
    ufile1=req.files.ufile1;
	ufile2=req.files.ufile2;
ufile1.mv("./file_for_videos/"+fvideo.mp4,function(err)
	{
		if(err)
			return   res.status(400).send("path not available")
		
		res.write("+ufile1.name"+ "uploaded successfully")
		console.log("ufile"+err)
		
	})
ufile2.mv("./file_for_videos/"+"background.mp4",function(err)
	{
		
		if(err)
			return   res.status(400).send("path not available")
		
		res.write(ufile2.name+" uploaded successfully")
		console.log("ufile"+err)
		res.end()
	})
	})
	})
	
app.listen(8080,function(){
	console.log("SERVER ON")
});