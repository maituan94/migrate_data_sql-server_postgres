exports.sendResponse = (code = 200, data = '') => {
  return {
    statusCode: code,
    body: JSON.stringify({
      data
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};
