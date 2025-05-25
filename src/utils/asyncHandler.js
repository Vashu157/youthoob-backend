const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch((error) => {
      res.status(500).json({ success: false, error: error.message });
    });
};


// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(500).json({success:false,error:error.message})
//     }

// }
export {asyncHandler}