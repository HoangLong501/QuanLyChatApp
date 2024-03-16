const db = require("../config/db");

var User = {
    
    getAllUser: (callback)=>{
        db.query('select * from user' , callback);
    },
    insertUser:(user , callback)=>{
        db.query('INSERT INTO user SET ?',user,callback);
    },
    updatetUser:(id ,user , callback)=>{
        db.query('UPDATE user SET ? WHERE id_user = ?',[user,id] ,callback);
    },
    deleteUser:(id , callback)=>{
        db.query('DELETE FROM user WHERE id_user = ?',[id] ,callback);
    },
    authenticateUser: (account, password, callback) => {
        db.query('SELECT * FROM user WHERE account = ? AND password = ?', [account, password], callback);
    }
};  

module.exports = User;