const Metalsmith = require('metalsmith')
const drafts = require('@metalsmith/drafts') //将文件标记为在开发模式下预览它们，但在生产环境中将其删除draft: true
const markdown = require('@metalsmith/markdown')  //将 Markdown 文件和元数据键转换为 HTML
const layouts = require('@metalsmith/layouts')  //以您选择的模板语言将文件包装在布局中（a.o. Pug, Nunjucks, Handlebars, Twig, Ejs）

Metalsmith(__dirname)
  // .use(console.log)
  .use(drafts())
  .use(console.log)
  // .use(markdown())
  // .use(console.log)
  // .use(layouts())
  // .use(console.log)
  .build((err, files) => {
    // console.log(files);
    if (err) throw err
    // console.log('Build success!')
  })