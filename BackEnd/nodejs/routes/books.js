var express = require('express');
var router = express.Router();

// TODO : Move it to its own class

var sortBooks = function (books, field, sort) {

    var control = 1;

    if (sort == "desc") {
        control = -1;
    }

    books.sort(function(book1, book2) {
        if(book1[field] < book2[field]) return -control;
        if(book1[field] > book2[field]) return control;
        return 0;
    });

    return books;
};

router.post('/sortByTitle', function(req, res, next) {

    console.log(req.query.sort);

    res.send(sortBooks(req.body.books, "title", req.query.sort == "desc" ? "desc" : "asc"));
});

router.post('/sortByAuthor', function(req, res, next) {

    res.send(sortBooks(req.body.books, "author", req.params.sort == "desc" ? "desc" : "asc"));
});

module.exports = router;
