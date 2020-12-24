'use strict';

var response = require('./res');
var connection = require('./koneksi');
const e = require('express');


exports.index = function (req,res){
    response.ok("Aplikasi REST API ku berjalan!",res);
}


//menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds){
        if(error){
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}


//Menampilkan data berdasarkan id
exports.tampilkanBerdasarkanId = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id], function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res);
        }
    })
}

//menambah data mahasiswa
exports.tambahMahasiswa = function (req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan)VALUES(?,?,?)', [nim,nama,jurusan], 
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambahkan data", res)
        }
    })
}

