/**
 * 转换html
 */
const Metalsmith = require('metalsmith')
const layouts = require('@metalsmith/layouts')
const markdown = require('@metalsmith/markdown')   //转换html文件
const writemetadata = require('metalsmith-writemetadata');
Metalsmith(__dirname)
  .source('src')
  .destination('build')
  .use(markdown())
  // .use(layouts())
  .use(writemetadata({            // write the JS object
    pattern: ['**/*.html'],            // for each file into .json
    ignorekeys: ['next', 'previous'],
    bufferencoding: 'utf8'        // also put 'content' into .json
  }))
  .build(function (err, files) {
    console.log(files);
    if (err) throw err;
  });