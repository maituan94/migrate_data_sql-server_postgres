const sendMessage = ((code:number = 200, message:string = 'Message from server') => {
    return {
        statusCode: code,
        body: JSON.stringify({
            message: message
        })
    };
})

export {sendMessage}