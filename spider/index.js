/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
//nodejs modules
var fs = require('fs');
var path = require('path');
var https = require('https');
var http = require('http');
var superagent = require('superagent');


//modules from npm install
var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');

var app = express();
var COMMENTS_FILE = path.join(__dirname, 'data/users.json');


app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    //res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    //res.setHeader('Cache-Control', 'no-cache');
    next();
});

//app.get means to process 'GET' request.
//param1: url
//param2: callback is called when the request comes.
app.get('/api/checkUser', function (req, res) {

    fs.readFile(COMMENTS_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }


        var counters = JSON.parse(data);
        console.log('req.query.user=' + req.query.user);

        if (checkUser(counters, req.query.user) === true) {
            res.json({ret: true});
        } else {
            res.json({ret: false});
        }
    });
});

app.post('/api/register', function (req, res) {
    //console.log(req.body);
    fs.readFile(COMMENTS_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }

        var counters = JSON.parse(data);

        if (checkUser(counters, req.body.user) === false) {
            res.json({ret: false, msg: 'user exsited'});
            return;
        }

        var newCounter = {
            user: req.body.user,
            password: req.body.password,
        };
        counters.push(newCounter);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(counters, null, 4), function (err) {
            // console.log(JSON.stringify(comments));
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });
    });
});

app.post('/api/login', function (req, res) {
    console.log(req.body);
    fs.readFile(COMMENTS_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(req.body);
        var counters = JSON.parse(data);
        for (var i = 0; i < counters.length; i++) {
            if (counters[i].user === req.body.user && counters[i].password === req.body.password) {
                res.json({ret: true});
                return;
            }
        }

        res.json({ret: false});
    });
});

app.post('/api/proxy/detail/http',(req,res)=>{
	res.header("Content-Type", "application/json; charset=utf-8")
	var url = req.body.url;
    var str = 'window.__INITIAL_STATE__=';
    var num = 2;
    var reg = /"tid":(\d*)/g;
    var p = new Promise((resolve,reject)=>{
	   spideHtmlContentHttp(url,'script',resolve,reject,str,num,reg);
    })
    p.then((ret)=>{
        res.json(ret);
    }).catch(()=>{
        res.json({'error':'请求回调异常'});
    })
});

app.post('/api/proxy/detail/https',(req,res)=>{
	res.header("Content-Type", "application/json; charset=utf-8")
	var url = req.body.url;
	 var str = 'window.__INITIAL_STATE__=';
    var num = 3;
    var reg = /"tid":(\d*)/g;
    console.log('url',url);
	var p = new Promise((resolve,reject)=>{
		spideHtmlContentHttps(url,'script',resolve,reject,str,num,reg);
	})
	
	p.then((ret)=>{
		res.json(ret);
	}).catch(()=>{

		res.json({'error':'请求回调异常'});
        
	})
});


app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function checkUser(counters, newUser) {
    for (var i = 0; i < counters.length; i++) {
        if (counters[i].user === newUser) {
            return false;
        }
    }

    return true;
}

//获取指定路径页面标签内容
function spideHtmlContentHttps(url,tag,resolve,reject,str,num,reg){
	let ret = null;
    superagent
        .get(url) //这里的URL也可以是绝对路径
        .end(function(err,res){
            if(err){
                reject();
            }
            resolve(filterTags(res.text,tag,str,num,reg));
        })
}

function spideHtmlContentHttp(url,tag,str,num,reg){
	let ret = null;
    superagent
        .get(url) //这里的URL也可以是相对路径
        .end(function(err,res){
            if(err){
                reject();
            }
            resolve(filterTags(res.text,tag,str,num,reg));
        })
	
}

function filterTags(html,tag,str,num,reg){
    let ret = {"rid":1};
	 var $ = cheerio.load(html);
     console.log('html.length',html.length);

    // 通过类名获取tags信息
    //var str = 'window.__INITIAL_STATE__=';
    //var reg = /"tid":(\d*)/g;
     $(tag).each(function(index,item){
            // var content = $(item).html();
            if(index == num){
                // var content = $(item).html();
                if(reg.test($(item).html())){
                    console.log(RegExp.$1);
                    ret= {"rid":RegExp.$1};
                }
            }
    })
    return ret;
    
}