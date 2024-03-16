const report = require('../models/report_modal');

const reportController ={
    getAllreports:(req,res)=>{
        report.getAllreport((err,results)=>{
            if (err) {
                console.error('Error getting reports:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req");
              }
        });
    },
    createreport: (req, res) => {
      const newreport = req.body;
      report.insertreport(newreport, (err, result) => {
        if (err) {
          console.error('Error creating report:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          
        }
      });
    },
    updatereport: (req, res) => {
      const reportId = req.params.id;
      // http://localhost:2000/api/update/reports/report111  truyền id vào url để chỉnh sửa id đó
      const newreport = req.body;
      report.updatetreport(reportId,newreport, (err, result) => {
        if (err) {
          console.error('Error updating report:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    },
    deletereport: (req, res) => {
      const reportId = req.params.id;
      report.deletereport(reportId, (err, result) => {
        if (err) {
          console.error('Error deleting report:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
        }
      });
    }

    // Thêm hàm xử lý ở đây
};
module.exports=reportController;