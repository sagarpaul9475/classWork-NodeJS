const url=require("./urlModule");

exports.createShortUrl=async(req,res)=>{
    try{
        const {id:id,url:originalUrl}=req.body;
        if(!originalUrl){
            return res.status(400).json({message:"URL is required"});
        }
        const shortUrl=Math.random().toString(36).substring(2,8);
        await url.create({id:id, url: originalUrl, shortUrl });
        res.json({message:"Short URL created",shortUrl});
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
}
exports.getShortUrls=async(req,res)=>{
    try{
        const urls=await url.find();
        res.json(urls);
    }
    catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
}
exports.redirectShortUrl=async(req,res)=>{
    try{
        const {shortUrl}=req.params;
        const urlData=await url.findOne({shortUrl});
        if(urlData){
            res.redirect(urlData.url);
        }else{
            res.status(404).json({message:"Short URL not found"});
        }
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
}