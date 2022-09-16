const http = require('http');
const express = require('express');
const { error } = require('console');
const { response } = require('express');
const { writer } = require('repl');
const app = express();

app.set('port', process.env.PORT || 3003);
app.set("view engine", "ejs");


// 리소스 폴더 추가 (serve-static)
app.use(express.static('public'));
//이것을 추가해줘야 post 가 보내짐.
app.use(express.urlencoded( {extended : false } ));

let homeList = [
    {link:'board', item: 'board'},
    {link:'#', item: 'test1'},
    {link:'#', item: 'test2'},
]

let articleList = [
    {no:0, title: '게시글제목0', writer:'캘리번', article:'게시글내용0'},
    {no:1, title: '게시글제목1', writer:'카피바라', article:'게시글내용1'},
    {no:2, title: '게시글제목2', writer:'털닭', article:'게시글내용2'},
    {no:3, title: '게시글제목3', writer:'뽀송이', article:'게시글내용3'},
    {no:4, title: '게시글제목4', writer:'맴미', article:'게시글내용4'},
    {no:5, title: '게시글제목5', writer:'가나쥐', article:'게시글내용5'}
]

/*------------------메인화면-------------------*/
app.get('/', function(req, res) {
    let DataObj={
        homeList:homeList
    }
    req.app.render('index', DataObj, (err, html)=>{
        if(err) {
            throw err;
        }
        res.end(html);
    });
});



let artId =5;


/*------------------게시판 리스트-------------------*/
app.get('/board', function(req, res) {
    let DataObj = {
        articleList:articleList
    }
    req.app.render('board', DataObj, (err, html)=>{
        if(err) {
            throw err;
        }
        res.end(html);
    });
});
/*------------------게시판 리스트-------------------*/


/*------------------게시물 디테일-------------------*/
///detail/:id이렇게 콜론(:)뒤에 오는 변수를 파라미터로 받게된다.
//그 파라미터는 req.params.id로 접근할 수 있다.
app.get('/board/detail/:id', function(req, res) {
    let getarticle={};
    articleList.forEach(function(article) {
        if(article.no == req.params.id) {
            getarticle = article;
        }
    });

    let DataObj = {
        articleId : req.params.id,
        article : getarticle
    }
    req.app.render('detail', DataObj, (err, html)=>{
        if(err) {
            throw err;
        }
        res.end(html);
    });
});
/*------------------게시물 디테일-------------------*/


/*------------------글쓰기-------------------*/
app.get('/board/write', function(req, res) {
    req.app.render('write', (err, html)=>{
        if(err) {
            throw err;
        }
        res.end(html);
    });
});

app.post('/board/write', function(req, res) {

    artId ++;
    let title = req.body.title;
    let writer = req.body.writer;
    let article = req.body.article;

    articleList.push({no:artId, title: title, writer:writer, article: article});
    res.redirect('/board');
});
/*------------------글쓰기-------------------*/




/*------------------글수정-------------------*/
app.get('/board/edit/:id', function(req, res) {
    let DataObj = {
        articleId : req.params.id,
        articleList:articleList
    }
    req.app.render('edit', DataObj, (err, html)=>{
        if(err) {
            throw err;
        }
        res.end(html);
    });
});


app.post('/board/edit/:id', function(req, res) {
    let getarticle={};
    articleList.forEach(function(article) {
        if(article.no == req.params.id) {
            getarticle = article;
        }
    });
    let idx = articleList.indexOf(getarticle);

    let id = req.params.id;
    let title = req.body.title;
    let writer = req.body.writer;
    let article = req.body.article;

    articleList.splice(idx,1,{no:id, title: title, writer:writer, article: article});
    
    res.redirect('/board');
});
/*------------------글수정-------------------*/


/*------------------글삭제-------------------*/
app.get('/board/delete/:id', function(req, res) {
    let getarticle={};
    articleList.forEach(function(article) {
        if(article.no == req.params.id) {
            getarticle = article;
        }
    });
    let idx = articleList.indexOf(getarticle);

    articleList.splice(idx,1);
    res.redirect('/board');
});





const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('Listening on port: ' + app.get('port'));
});