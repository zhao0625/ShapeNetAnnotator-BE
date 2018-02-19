var express = require('express');
var router = express.Router();

var fs = require('fs'),
    path = require('path'),
    url = require('url');

var cmd = require('node-cmd');  // TODO node-cmd
var THREE = require('three');

// working directory
var DIR = "/data/hier_seg_shapenet_parts/data/";  // /[category name]/[model id]
// path prefix
var PREFIX = "/normalized_obj/entire_shape.obj",
    PREFIX_REMESH = "/normalized_obj/entire_shape_remesh.obj",
    PREFIX_JSON = "/tree_hier.json";  // TODO which one?
// remeshing executable
var REMESH_EXECUTABLE = 'model_fixer';


// Listening to the request
router.post('/', function (req, res, next) {
    console.log('[ POST request from /remeshing ]');
    // TODO Parse the POST request
    var body = req.body.body;
    var model_id = req.body.model_id;

    // TODO Remesh
    var loader = new THREE.OBJLoader();

    // TODO Response with re-meshed obj
    res.end('[ . ]');
});

module.exports = router;