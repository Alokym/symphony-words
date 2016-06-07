var express = require('express');
var path = require('path');
var app = express();


app.use(express.static('build'));
app.get('/*', function (req, res) {
    return res.sendFile(path.join(__dirname + '/build/index.html'));
});

module.exports = {
    listen: function (port) {
        var server = app.listen(port, function () {
            console.log('Words app listening at http://%s:%s', server.address().address, server.address().port);
        });
    }
};