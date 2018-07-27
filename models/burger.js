const orm = require("../config/orm.js");





const burger = {

  selectAll : (callback) => {

    orm.selectAll("burgers", (results)=>{
      callback(results);
    });

  },


  insertOne : (cols, vals, callback) => {


    orm.insertOne("burgers", cols, vals, (result)=>{

      callback(result);
    });

  },

  updateOne : (cols, vals, condition, callback) =>{




    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing Second Declared CallBack");
      callback(result);
    });

  }




}; 




module.exports = burger;