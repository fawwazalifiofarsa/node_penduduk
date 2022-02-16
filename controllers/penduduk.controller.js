'use strict'

const db = require('../db')

module.exports = {
    index: (req,res) => {
        const sql = `select * from data_penduduk`;
        db.query(sql, (err,result) => {
            if(err) throw(err)
            res.json({ 
                message: 'Berhasil ambil data!',
                data: result
            })
        })
    },

    indexId: (req,res) => {
        var id = req.params.id
        const sql = `select * from data_penduduk where id=${id}`;
        db.query(sql, (err,result) => {
            if(err) throw(err)
            res.json({ 
                message: 'Berhasil ambil data!',
                data: result
            })
        })
    },

    add: (req,res) => {
        var penduduk = {
            nama: req.body.nama,
            alamat: req.body.alamat,
            umur: req.body.umur
        }
        const sql = `insert into data_penduduk set ?`
        db.query(sql, penduduk, (err,result) => {
            if(err) throw(err)
            res.json({
                message: "Berhasil tambah data!"
            })
        })
    },

    update: (req,res) => {
        var id = req.params.id
        var penduduk = {
            nama: req.body.nama,
            alamat: req.body.alamat,
            umur: req.body.umur
        }
        const sql = `update data_penduduk set ? where id='${id}'`
        db.query(sql, penduduk, (err,result) => {
            if(err) throw(err)
            res.json({
                message: "Berhasil update data!"
            })
        })
    },

    delete: (req,res) => {
        var id = req.params.id
        const sql = `delete from data_penduduk where id='${id}'`
        db.query(sql, (err,result) => {
            if(err) throw(err)
            res.json({
                message: "Berhasil delete data!"
            })
        })
    }

}