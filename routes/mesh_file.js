var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var cmd = require('node-cmd');

// working directory
var DIR_LOCAL = "/Users/zlf/ForData/ShapeNet/ShapeNetCore.v2/",  // /[category id]/[model id]
    DIR = "/data/hier_seg_shapenet_parts/data/";  // /[category name]/[model id]
// path prefix
var PREFIX_LOCAL = "/models/model_normalized.obj",
    PREFIX = "/normalized_obj/entire_shape.obj",
    PREFIX_REMESH = "/normalized_obj/entire_shape_remesh.obj",
    PREFIX_JSON = "/tree_hier.json";  // TODO which one?
// remeshing executable
var REMESH_EXECUTABLE = 'model_fixer';

// TODO GET request: /obj/[category id]-[model id]
router.get('/obj/:category_id-:model_id-:remesh', function (req, res, next) {
    if (req.params.remesh === 'true') {
        var remesh_path = DIR + req.params.category_id + '/' + req.params.model_id + PREFIX_REMESH;
        console.log(remesh_path);

        if (!fs.exists(remesh_path)) {
            var original_path = DIR + req.params.category_id + '/' + req.params.model_id + PREFIX;
            cmd.get(REMESH_EXECUTABLE + ' ' +
                original_path + ' ' + remesh_path);  // TODO [resolution]
            console.log(original_path);
        }

        // TODO http response (!)
        /* var stat = fs.statSync(remesh_path);
        res.writeHead(200, {
            'Content-Type': '???',
            'Content-Length': stat.size
        });
        var readStream = fs.createReadStream(remesh_path);
        readStream.pipe(res); */
        res.download(remesh_path);  // res.sendFile(..);
        console.log("[ sent obj file ]");
    } else {
        res.end("only support requesting for re-meshed file now.");
        console.log("[ request for original file ]");
    }
});

// TODO GET request: /json/[category id]-[model id]
router.get('/json/:category_id-:model_id', function (req, res, next) {
    var file_path = DIR + req.params.category_id + '/' + req.params.model_id + PREFIX_JSON;

    // TODO http response
    res.download(file_path);

    console.log("[ sent json file ]");
});

module.exports = router;