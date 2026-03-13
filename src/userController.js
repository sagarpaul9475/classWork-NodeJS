const user = require('./userModules');
exports.getUsers = (req, res) => {
    res.json(user);
};
exports.getUserById=(req,res)=>{
    const userId=req.params.id;
    res.json(userId);
}