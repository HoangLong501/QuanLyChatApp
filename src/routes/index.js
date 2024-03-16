const express = require('express');
const UserController = require('../controllers/user_controller');
const FriendshipController = require("../controllers/friendship_controller");
const MessageController = require("../controllers/message_controller");
const Notification = require("../controllers/notification_controller");
const Report = require("../controllers/report_controller");
const jwt = require('jsonwebtoken');

const route = express.Router();
const secretKey = 'kimhoanglong05012002';

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        console.error('Error verifying token:', err);
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = user;
      next();
    });
  }

route.post('/login',UserController.login);

route.use(authenticateToken);
route.get('/protected', UserController.protectedRoute);

route.get('/users',UserController.getAllUsers);
route.post('/users',UserController.createUser);
route.post('/update/users/:id',UserController.updateUser);
route.post('/delete/users/:id',UserController.deleteUser);


route.get('/friend',FriendshipController.getAllfriendships);
route.post('/friend',FriendshipController.createfriendship);
route.post('/delete/friend/:id',FriendshipController.deletefriendship);

route.get('/message',MessageController.getAllmessages);
route.post('/message',MessageController.createmessage);
route.post('/update/message/:id',MessageController.updatemessage);
route.post('/delete/message/:id',MessageController.deletemessage);

route.get('/noti',Notification.getAllnotifications);
route.post('/noti',Notification.createnotification);
route.post('/update/noti/:id',Notification.updatenotification);
route.post('/delete/noti/:id',Notification.deletenotification);

route.get('/report',Report.getAllreports);
route.post('/report',Report.createreport);
route.post('/update/report/:id',Report.updatereport);
route.post('/delete/report/:id',Report.deletereport);



module.exports=route;