const colors = {
    red: '\x1b[31m',
    reset: '\x1b[0m'
  };
  
  module.exports = {
    error: (message) => console.error(colors.red + message + colors.reset)
  };