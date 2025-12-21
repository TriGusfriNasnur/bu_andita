const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Evaluations = require('../models/evaluationsModel');
const User = require('../models/userModel');
const X = {1: [],2: [],3: [],4: [],5: []};

const secret = 'rahasia';
exports.getAll = (req, res) => {
  Evaluations.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getAllByGroupOrder = (req, res) => {
  Evaluations.findByGroupOrder((err, results) => {
    if (err) return res.status(500).json(err, results);
    for(let noArr = 1; noArr < 6 ; noArr++ ){
      for(let arrNo = 0 ; arrNo < results.length; arrNo++){
        X[noArr].push(results[arrNo][`C${noArr}`]); 
     
    /**X[1].push(results[0]["C1"]);
    X[1].push(results[1]["C1"]);
    X[1].push(results[2]["C1"]);
    X[1].push(results[3]["C1"]);
    X[1].push(results[4]["C1"]);
    X[1].push(results[5]["C1"]);
    X[2].push(results[0]["C2"]);
    X[2].push(results[1]["C2"]);
    X[2].push(results[2]["C2"]);
    X[2].push(results[3]["C2"]);
    X[2].push(results[4]["C2"]);
    X[2].push(results[5]["C2"]);
    X[3].push(results[0]["C3"]);
    X[3].push(results[1]["C3"]);
    X[3].push(results[2]["C3"]);
    X[3].push(results[3]["C3"]);
    X[3].push(results[4]["C3"]);
    X[3].push(results[5]["C3"]);
    X[4].push(results[0]["C4"]);
    X[4].push(results[1]["C4"]);
    X[4].push(results[2]["C4"]);
    X[4].push(results[3]["C4"]);
    X[4].push(results[4]["C4"]);
    X[4].push(results[5]["C4"]);
    X[5].push(results[0]["C5"]);
    X[5].push(results[1]["C5"]);
    X[5].push(results[2]["C5"]);
    X[5].push(results[3]["C5"]);
    X[5].push(results[4]["C5"]);
    X[5].push(results[5]["C5"]);**/
    //for (let i = 1; i < X.length; i++){
      //X[i].push(results[0][`C${i}`]);
    //}
    }
  }    
    res.json(results);  
  });
};
exports.getAllByBenefitGroupOrder = (req, res) => {
  //const X = X;
  Evaluations.findByBenefitGroupOrder(X, (err, results) => {
    if (err) return res.status(500).json(err, X);
    res.json(results);
  });
};
exports.getAllByOrder = (req, res) => {
  Evaluations.findByOrder((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getOne = (req, res) => {
  Evaluations.findById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(results[0]);
  });
};

exports.insert = (req, res) => {
  Evaluations.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Nilai Berhasil Ditambahkan' });
  });
};

exports.update = (req, res) => {
  Evaluations.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Nilai Berhasil Diupdate' });
  });
};

exports.remove = (req, res) => {
  Evaluations.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Nilai Berhasil Dihapus' });
  });
};