/* var  app = require('../app.js').app */
var  superagent = require('superagent')
var  cheerio = require('cheerio')
var baseUrl = 'http://ycccz.com/src/html/login.html'
var fs = require('fs')
var Entities = require('html-entities').XmlEntities;
entities = new Entities();


function  ask(){
        //发起请求
        superagent.get(baseUrl).end(function (err, res) {
            // 抛错拦截
            if(err){
                console.log(new Error(err));
            }
            else{
                //解析页面
                var  $ = cheerio.load(res.text);
                   
                var testData = {
                    title : entities.decode($('title').html()),
                    btnName :  entities.decode($('a').html())
                }

                fs.writeFile(__dirname + '/data/demo.json', JSON.stringify({
                    status: 0,
                    data: testData
                }), function (err) {
                    if (err) console.log(new Error(err))
                    console.log('写入完成');
                });

            }
        });
}

exports.ask = ask



