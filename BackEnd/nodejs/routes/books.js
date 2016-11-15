var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/sorted', function(req, res, next) {
    res.send('Sorted');
});

router.post('/sortByTitle', function(req, res, next) {

    var books = req.body.books;
    books.sort(function(book1, book2) {
        if(book1.title < book2.title) return -1;
        if(book1.title > book2.title) return 1;
        return 0;
    });

    res.send(books);
});

router.post('/sortByAuthor', function(req, res, next) {

    var books = req.body.books;
    books.sort(function(book1, book2) {
        if(book1.author < book2.author) return -1;
        if(book1.author > book2.author) return 1;
        return 0;
    });

    res.send(books);
});

module.exports = router;
