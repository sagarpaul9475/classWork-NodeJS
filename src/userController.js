const user = require('./userModules');
exports.getUsers = (req, res) => {
    res.json(user);
};
exports.getUserById=(req,res)=>{
    const userId=req.params.id;
    res.json(userId);
}
exports.queryParams=(req,res)=>{
    const name=req.query.name;
    res.json(name);
}