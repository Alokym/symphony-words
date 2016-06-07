var express = require('express');
var app = express();

app.get('/*', express.static('build'));

module.exports = {
    listen: function (port) {
        var server = app.listen(port, function () {
            console.log('Words app listening at http://%s:%s', server.address().address, server.address().port);
        });
    }
};