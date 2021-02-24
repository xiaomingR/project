const apl = {
    METHODS: {
        GET: "get", //get请求
        POST: "post" //post请求
    },
    //接口路径
    URL: {
        //登录
        Login: "/api/app/login",
        //验证码登录
        SmsCode: "/api/app/smsCode",
        //修改密码
        Change: "/api/app/password"
    }
}
export default apl