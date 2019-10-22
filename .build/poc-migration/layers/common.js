"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMessage = ((code = 200, message = 'Message from server') => {
    return {
        statusCode: code,
        body: JSON.stringify({
            message: message
        })
    };
});
exports.sendMessage = sendMessage;
//# sourceMappingURL=common.js.map