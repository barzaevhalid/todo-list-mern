const currentIdMiddleware = (req, res, next) => {
 const {id} = req.params
    if(!id) {
           return res.status(400).json({message: "Id не указан"})
    }
  const regexp = /[0-9a-fA-F]{24}/
   if(regexp.test(id)) {
       next()
   }else {
      return res.status(400).json({message: "Указан неверный id: " + id})
   }
}
export default  currentIdMiddleware
