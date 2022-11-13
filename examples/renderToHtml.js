/**
 * 转换html
 */
const Metalsmith = require('metalsmith')
const layouts = require('@metalsmith/layouts')
const markdown = require('@metalsmith/markdown')   //转换html文件
const writemetadata = require('metalsmith-writemetadata');
const Handlebars = require("handlebars");
const path = require('path')
const dirPath = path.resolve(process.cwd(), '..')
const rm = require('rimraf').sync
Metalsmith(dirPath)
  .metadata({                 // add any variable you want
    // use them in layout-files
    sitename: "My Static Site & Blog",
    siteurl: "https://example.com/",
    description: "It's about saying »Hello« to the world.",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
    color: 'blue',
    name: "Test"
  })
  .source('./src')
  .destination('./build')
  .clean(true)                // empty the destination before
  .use(markdown())

  .use(layouts({
    default: '../src/my.hbs',
    engineOptions: {
      name: 'tom'
    },
    suppressNoFilesError: true,
  }))
  .use((files, metalsmith, done) => {
    Object.keys(files).forEach(fileName => { //遍历替换模板
      const fileContentsString = files[fileName].contents.toString() //Handlebar compile 前需要转换为字符创
      files[fileName].contents = new Buffer(Handlebars.compile(fileContentsString)(metalsmith.metadata()))
    })
    done()
  })
  .use(writemetadata({            // write the JS object
    pattern: ['**/*.html'],            // for each file into .json
    ignorekeys: ['next', 'previous'],
    bufferencoding: 'utf8'        // also put 'content' into .json
  }))
  .build(function (err, files) {
    // console.log(files);
    if (err) throw err;
  });