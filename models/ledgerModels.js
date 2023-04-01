const mongoose = require('mongoose');

/*NOTES
"ID: INT, //IDENTITY (30001, 1)" 
-->>I tried to find something to get the Identity function to work.  I couldn't find anything.  
 -->>Mongoose has an _Id already built in so I used that.
*/


const ledgerSchema = new mongoose.Schema({
  
/*************************************************/
  ID_LOAN: { 
    type: String, 
    require: [true,'You must enter a LOAN ID'],
    trim: true,
    maxlength: [40, 'A LOAN number must have less or equal then 40 characters'],
    minlength: [10, 'A LOAN number must have more or equal then 10 characters']
  },
/*************************************************/
  PAYMENT_AMOUNT: Number,
/*************************************************/
  INTEREST: Number,
/*************************************************/
  PRINCIPAL: Number,
/*************************************************/
  IS_DELETED: { 
    type: Boolean, 
    default: false 
  }
/*************************************************/
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});

const Ledger = mongoose.model('Ledger', ledgerSchema);
module.exports = Ledger;