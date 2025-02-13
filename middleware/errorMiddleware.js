const errorHandler = (err, req, res, next) => {
    console.error(err.stack.red);
  
    res.status(500).json({
      success: false,
      error: process.env.NODE_ENV === 'production' 
        ? 'Server Error'
        : err.message
    });
  };
  
  module.exports = errorHandler;