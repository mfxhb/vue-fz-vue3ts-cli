/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:41:54
 * @LastEditTime: 2022-08-24 15:48:05
 * @Description:
 */
/**
 * 开启一个服务
 * @param {app} app app实例
 * @param {number} port 端口
 * @return {void}
 */
function startOneServe(app, port_ = "8989") {
  app.listen(port_, function () {
    const serve = this;
    const port = serve.address().port;
    let host = serve.address().address;
    host = host === "::" ? "127.0.0.1" : host;
    console.log("服务开启成功: http://%s:%s", host, port);
  });
}

export { startOneServe };
