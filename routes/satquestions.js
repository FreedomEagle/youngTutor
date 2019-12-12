const express = require ('express');
const router = express.Router()
const sat1data = require('../data/sat1.json').data;
const  sat1question  = sat1data.questions;


router.get('/schedule',function(req,res){
    res.render("schedule")
  });
  
  
router.get('/sat/:id',function(req,res){
   
    res.locals.questionTitle = "The Question Goes Here"
    res.render("satlayout",
      { title: sat1question[req.params.id].title,
        question: sat1question[req.params.id].question,
        options: sat1question[req.params.id].hint,
        optionA: sat1question[req.params.id].optionA,
        optionB: sat1question[req.params.id].optionB,
        optionC: sat1question[req.params.id].optionC,
        optionD: sat1question[req.params.id].optionD,
        hint1: sat1question[req.params.id].hint1,
        hint2: sat1question[req.params.id].hint2
    })  ;  
  });

  module.exports = router;