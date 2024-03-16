const db = require("../config/db");

var message = {
    
    getAllmessage: (callback)=>{
        db.query('select * from message' , callback);
    },
    insertmessage:(message , callback)=>{
        db.query('INSERT INTO message SET ?',message,callback);
    },
    updatetmessage:(id ,message , callback)=>{
        db.query('UPDATE message SET ? WHERE id_mess = ?',[message,id] ,callback);
    },
    deletemessage:(id , callback)=>{
        db.query('DELETE FROM message WHERE id_mess= ?',[id] ,callback);
    }
};  

module.exports = message;