const User = require('../models/user_modal');
const jwt = require('jsonwebtoken');
const secretKey = 'kimhoanglong05012002';
const UserController ={
    getAllUsers:(req,res)=>{
        User.getAllUser((err,results)=>{
            if (err) {
                console.error('Error getting users:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req GetAllUser");
              }
        });
    },
    createUser: (req, res) => {
      const newUser = req.body;
      User.insertUser(newUser, (err, result) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          console.log("Test log khi có req createUser");
        }
      });
    },
    updateUser: (req, res) => {
      const userId = req.params.id;
      // http://localhost:2000/api/update/users/user111  truyền id vào url để chỉnh sửa id đó
      const newUser = req.body;
      User.updatetUser(userId,newUser, (err, result) => {
        if (err) {
          console.error('Error updating user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    },
    deleteUser: (req, res) => {
      const userId = req.params.id;
      User.deleteUser(userId, (err, result) => {
        if (err) {
          console.error('Error deleting user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    },
    login: (req, res) => {
      const { account, password } = req.body;

      User.authenticateUser(account, password, (err, result) => {
          if (err) {
              console.error('Error authenticating user:', err);
              res.status(500).json({ error: 'Internal Server Error' });
          } else if (result.length > 0) {
              // Tạo token khi xác thực thành công
              const token = jwt.sign({ account }, secretKey, { expiresIn: '1h' });
              res.json({ token });
          } else {
              res.status(401).json({ message: 'Authentication failed' });
          }
      });
  },
  protectedRoute: (req, res) => {
    // Người dùng đã xác thực khi đến đây
    res.json({ message: 'Protected route - User is authenticated' });
}

    // Thêm hàm xử lý ở đây
};
module.exports=UserController;