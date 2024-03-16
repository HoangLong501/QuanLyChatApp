const db = require("../config/db");

var notification = {
    
    getAllnotification: (callback)=>{
        db.query('select * from notification' , callback);
    },
    insertnotification:(notification , callback)=>{
        db.query('INSERT INTO notification SET ?',notification,callback);
    },
    updatetnotification:(id ,notification , callback)=>{
        db.query('UPDATE notification SET ? WHERE id_noti = ?',[notification,id] ,callback);
    },
    deletenotification:(id , callback)=>{
        db.query('DELETE FROM notification WHERE id_noti= ?',[id] ,callback);
    }
};  

module.exports = notification;