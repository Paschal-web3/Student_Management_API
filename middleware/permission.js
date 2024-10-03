exports.PermissionMiddleware = (AdminRole)=>{
    return (req, res, next) =>{

        const userRole = req.user.Role 
        // Check if user has admin role. If not, return an error message and stop the function execution.
        if (AdminRole.includes(userRole)){
            next()
        }
        else{
            res.status(403).json({
                success:false,
                status:403,
                message:"You do not have permission to access this resource" 
            })
        }
    }
}
