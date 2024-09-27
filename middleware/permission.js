const PermissionMiddleware = (AdminRole)=>{
    
    return (req, res, next)=>{
        try {
          const user = req.user.Position
          if (AdminRole.includes(user)){
            next()
          }  
          return res.status(403).json({
            status: 403,
            success: false,
            message: "You are not authorized to perform this action."
          })
        } catch (error) {
            console.log(error)
        }
    }
}