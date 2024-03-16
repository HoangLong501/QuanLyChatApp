const db = require("../config/db");

var report = {
    
    getAllreport: (callback)=>{
        db.query('select * from report' , callback);
    },
    insertreport:(report , callback)=>{
        db.query('INSERT INTO report SET ?',report,callback);
    },
    updatetreport:(id ,report , callback)=>{
        db.query('UPDATE report SET ? WHERE id_report = ?',[report,id] ,callback);
    },
    deletereport:(id , callback)=>{
        db.query('DELETE FROM report WHERE id_report = ?',[id] ,callback);
    }
};  

module.exports = report;