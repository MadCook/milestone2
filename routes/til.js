var express = require('express');
var router = express.Router();

var til = [
  {slug:"Learning VM", body: "Today I successfully set up the VM. Well I had already set it up but for the first time I successfully used it for something. Getting heroku to work on it was originally daunting but the task was manageable.", created_at: "2016-02-13"},
  {slug:".ejs", body: "I learned how to implement my .ejs files", created_at: "2016-03-05"}
];

/* READ all: GET entries listing. */
router.get('/', function(req, res, next) {
  res.render('til/index', { title: 'Blog', til: til });
});

/* CREATE entry form:  /entries/new */
router.get('/new', function(req, res, next) {
  res.render('til/new', {title: "Create new entry"});
});

/*CREATE entry: POST /entries/ */
router.post('/', function(req, res, next) {
  til.push(req.body);
  res.render('til/index', { title: 'Blog', til: til});
});

/* UPDATE entry form: GET /entries/1/edit */
router.get('/:id/edit', function(req, res, next) {
  res.render('til/update',
  {
    title: 'Update an entry',
    id: req.params.id,
    til: til[req.params.id]
  });
});

/* UPDATE entry: POST /entries/1 */
router.post('/:id', function(req, res, next) {
  til[req.params.id] = req.body;
  res.render('til/index',
  {
    title: 'Update an entry',
    til: til
  });
});

/* DELETE entry: GET /entries/1/delete  */
router.get('/:id/delete', function(req, res, next) {
  var id = req.params.id
  til = til.slice(0,id).concat(til.slice(id+1, til.length));
  res.render('til/index', { title: 'Blog', til: til });
});

/* THIS NEEDS TO BE LAST or /new goes here rather than where it should */
/* READ one entry: GET /entries/0 */
router.get('/:id', function(req, res, next) {
  res.render('til/entry', {title: "a entry", til: til[req.params.id]});
});

module.exports = router;
