var express = require('express');
var router = express.Router();
var { extract } = require('oembed-parser/dist/cjs/oembed-parser.js');



// Home
router.get('/', (req, res) => {
    res.render('html/index.html');
});

router.post('/result', function(req, res){

    let url = '';
    url = req.body.url;
    console.log(url);
    extract(url).then((oembed) => {
        //res.json({oembed});
        console.log(oembed);
        res.render('html/result.ejs', {data : oembed});
    }).catch((err) => {
        console.trace(err)
    })
});

module.exports = router;