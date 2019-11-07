
const config = require('../../../../cfg/env.test.json')
process.env = config
describe("test Unit test", () => {
    const index = require('../index');
    
    it('call first test', async ()=>{
        const {statusCode, body} = await index.getData()
        expect(statusCode).toBe(200)
    });
})