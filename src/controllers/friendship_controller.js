const friendship = require('../models/friendship_modal');

const friendshipController ={
    getAllfriendships:(req,res)=>{
        friendship.getAllfriendships((err,results)=>{
            if (err) {
                console.error('Error getting friendships:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req");
              }
        });
    },
    createfriendship: (req, res) => {
      const newfriendship = req.body;
      friendship.insertfriendship(newfriendship, (err, result) => {
        if (err) {
          console.error('Error creating friendship:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          
        }
      });
    },
    
    deletefriendship: (req, res) => {
      const friendshipId = req.params.id;
      friendship.deletefriendship(friendshipId, (err, result) => {
        if (err) {
          console.error('Error deleting friendship:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    }

    // Thêm hàm xử lý ở đây
};
module.exports=friendshipController;