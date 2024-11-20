import jwt from "jsonwebtoken"

const userAuth = async(req,res,next) =>{
    const { token } = req.headers

    if(!token){
        return res.json({success: false,message: "Not Authorize Login Again.."})
    }

    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false,message: "Not Authorize Login Again.."})
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
}

export default userAuth;