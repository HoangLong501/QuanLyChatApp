const db = require("../config/db");

var friendship = {
    
    getAllfriendships: (callback)=>{
        db.query('select * from friendship' , callback);
    },
    insertfriendship:(friendship , callback)=>{
        db.query('INSERT INTO friendship SET ?',friendship,callback);
    },
    deletefriendship:(id , callback)=>{
        db.query('DELETE FROM friendship WHERE id_fen = ?',[id] ,callback);
    }
};  

module.exports = friendship;