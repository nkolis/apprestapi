'use strict';

var response = require('./res');
var connection = require('./konseksi');


exports.index = function (req,res){
    response.ok("Aplikasi REST API ku berjalan!");
}