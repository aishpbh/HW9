const { getConnection }= require(`./connection`)
const jwt = require('jsonwebtoken');

const secretkey='secret';
const loginHandler = async (req, res) =>{
    try{
    const {username, password } = req.body;
    console.log(req.body, 'body')
    if(username && password){
        const getconn = await getConnection();
         const result = await getconn.query(
      `select top 1 * from useraccount where username='${username}' and password = '${password}'`
        );
        const user = result.recordsets[0][0];
        const jwttoken=jwt.sign(
            user, secretkey, { expiresIn: '1h' });

        console.log(result.recordsets[0][0],result)
        res.cookie('token',jwttoken,{maxAge: 900000, httpOnly:true, Path:'/'});
    res.status(200).send({user,token:jwttoken});
    }else{
        res.status(500).json({error:'Email and/or password missing'});
    }
    
    }
    catch(err){
      console.log(err.message);
      res.send('')
    }
  }
  module.exports ={
    loginHandler
  }