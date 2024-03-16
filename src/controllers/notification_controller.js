const notification = require('../models/notification_modal');

const notificationController ={
    getAllnotifications:(req,res)=>{
        notification.getAllnotification((err,results)=>{
            if (err) {
                console.error('Error getting notifications:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req");
              }
        });
    },
    createnotification: (req, res) => {
      const newnotification = req.body;
      notification.insertnotification(newnotification, (err, result) => {
        if (err) {
          console.error('Error creating notification:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          
        }
      });
    },
    updatenotification: (req, res) => {
      const notificationId = req.params.id;
      // http://localhost:2000/api/update/notifications/notification111  truyền id vào url để chỉnh sửa id đó
      const newnotification = req.body;
      notification.updatetnotification(notificationId,newnotification, (err, result) => {
        if (err) {
          console.error('Error updating notification:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    },
    deletenotification: (req, res) => {
      const notificationId = req.params.id;
      notification.deletenotification(notificationId, (err, result) => {
        if (err) {
          console.error('Error deleting notification:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    }

    // Thêm hàm xử lý ở đây
};
module.exports=notificationController;