const message = require('../models/message_modal');

const messageController ={
    getAllmessages:(req,res)=>{
        message.getAllmessage((err,results)=>{
            if (err) {
                console.error('Error getting messages:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req");
              }
        });
    },
    createmessage: (req, res) => {
      const newmessage = req.body;
      message.insertmessage(newmessage, (err, result) => {
        if (err) {
          console.error('Error creating message:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          
        }
      });
    },
    updatemessage: (req, res) => {
      const messageId = req.params.id;
      // http://localhost:2000/api/update/messages/message111  truyền id vào url để chỉnh sửa id đó
      const newmessage = req.body;
      message.updatetmessage(messageId,newmessage, (err, result) => {
        if (err) {
          console.error('Error updating message:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    },
    deletemessage: (req, res) => {
      const messageId = req.params.id;
      message.deletemessage(messageId, (err, result) => {
        if (err) {
          console.error('Error deleting message:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    }

    // Thêm hàm xử lý ở đây
};
module.exports=messageController;