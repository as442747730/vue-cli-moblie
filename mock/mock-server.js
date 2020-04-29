// https://blog.csdn.net/qq_38910842/article/details/103056833
const chokidar = require('chokidar')//node插件文件监控
// https://www.jianshu.com/p/e7b530579ab3
const bodyParser = require('body-parser')
// 创建中间件，当接收到客户端请求时所有的中间件都会给req.body 添加属性
// https://www.cnblogs.com/gxp69/p/7235911.html
const chalk = require('chalk')
// 颜色插件
const path = require('path')
// 路径模块
const mockDir = path.join(process.cwd(), 'mock')
// process.cwd() 方法返回 Node.js 进程的当前工作目录。 // 获取文件夹路径
function registerRoutes(app) {
  let mockLastIndex
  const { default: mocks } = require('./index.js')
  // 引入各模拟数据
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response)
    // mock.type get post    // 在express中注册路由
    // mock.response 响应内容
    mockLastIndex = app._router.stack.length // 获取所有已注册路由的长度
  }
  const mockRoutesLength = Object.keys(mocks).length // 获取所有mock数据的长度
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}
// nodejs清除require缓存 参考：https://blog.hellozwh.com/?post=433
function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
      // require.resolve 相当于把相对路径转化成绝对路径，避免了自己手写的绝对路径跟cache里的key不一致的问题
    }
  })
}

module.exports = app => {
  // es6 polyfill  babel-register可以理解成一个小插件，将es6的东西转成es5
  require('@babel/register')

  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: trueor
  }))
  // 接受json fo'rm格式请求
  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex

  // watch files, hot reload mock server
  chokidar.watch(mockDir, {
    ignored: /mock-server/, //忽略监听的文件
    ignoreInitial: true //是否忽略对增加文件或者增加文件夹的时候进行发送事件，默认值为false表示add/addDir会触发事件
    // 忽略对增加文件或者增加文件夹而触发事件
  }).on('all', (event, path) => { // 监听除了ready, raw, and error之外所有的事件类型
    if (event === 'change' || event === 'add') { // 文件内容改变或新增文件时触发
      try {
        // remove mock routes stack
        // 删除已经挂载到express的路由
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        // clear routes cache 路由缓存
        unregisterRoutes()

        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
