// const asyncHandler = (handler) => {
//     return async (req, res, next) => {
//         try {
//             await handler(req, res);
//         } catch (error) {
//             next(error);
//         }
//     };
// };

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(500).json({success:false,error:error.message})
//     }

// }
export {asyncHandler}