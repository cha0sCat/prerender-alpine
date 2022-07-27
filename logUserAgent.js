module.exports = {
    requestReceived: (req, res, next) => {
        // 只是记录请求 ua，不做任何修改
        // 用于查看谁在爬我
        console.log(req.headers['user-agent']);
    }
};