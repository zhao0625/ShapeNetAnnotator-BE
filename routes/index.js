var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'ShapeNet Part Annotation Server'});
    // res.download(dir + '/' + "model_normalized.obj", "mesh.obj");
});

module.exports = router;

