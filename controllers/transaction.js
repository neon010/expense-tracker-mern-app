const Transaction = require("../models/Transaction");
// description get all transaction
//route get /api/v1/transaction
//access public
exports.getTransaction = async (req,res,next)=>{
    try {
        const transaction = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

// description add a transaction
//route post /api/v1/transaction
//access public
exports.addTransaction = async (req,res,next)=>{
    try {
        const {text,amount} = req.body;
        const transaction = await Transaction.create(req.body);
        res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            const message = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: message
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
};

// description delete a transaction
//route delete /api/v1/transaction
//access public
exports.deleteTransaction = async (req,res,next)=>{
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction) {
          return res.status(404).json({
            success: false,
            error: 'No transaction found'
          });
        }
    
        await transaction.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
}

