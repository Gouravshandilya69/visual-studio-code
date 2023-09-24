var express = require('express');
var router = express.Router();
const fs = require("fs");


/* GET home page. */
router.get('/', function (req, res, next) {
  var array = []
  fs.readdir("./readfile", { withFileTypes: true }, (err, file) => {
    file.forEach(elm => {
      array.push({
        name: elm.name,
        isfile: elm.isFile()
      })

    });


    res.render('index', { files: array });
  })
});

router.get('/fileroute', function (req, res) {

  fs.writeFile(`./readfile/${req.query.filename}`, " ", function (err) {

    res.redirect('/')
  })


})
router.get('/folderroute', function (req, res) {

  fs.mkdir(`./readfile/${req.query.foldername}`, function (err) {

    res.redirect('/')
  })


})

router.get('/delete/:filename', function (req, res) {

  fs.unlink(`./readfile/${req.params.filename}`, function (err) {

    res.redirect('/')

  })

})
router.get('/deletefolder/:filename', function (req, res) {

  fs.rmdir(`./readfile/${req.params.filename}`, function () {
    res.redirect('/')
  })

})

router.get(`/open/:filename`, function (req, res) {
  var array = []
  var params = req.params.filename
  var data1 ="asfaga"
  fs.readdir("./readfile", { withFileTypes: true }, (err, file) => {
    file.forEach(elm => {
      array.push({
        name: elm.name,
        isfile: elm.isFile()
      })
    });
    fs.readFile(`./readfile/${params}`, "utf8", function (err, data) {
    
      
   })
  
    res.render('fileopened', { files: array, hello: params,newdata:data1});

  })

})





module.exports = router;
