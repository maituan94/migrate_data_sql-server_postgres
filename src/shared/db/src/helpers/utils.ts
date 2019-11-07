const sendMessage = (
  code: number = 200,
  message: any = "Message from server"
) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      data: message
    })
  };
};

export { sendMessage };
