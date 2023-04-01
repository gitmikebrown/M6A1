const mongoose = require('mongoose');

/*NOTES
 "LOAN_NUMBER: Number,"  
 -->>The mongoDb _ID will act as the loan number.  I took this out because of that.
 
 "ID: {type: Int, Identity (20001, 1)}," 
 -->>I tried to find something to get the Identity function to work.  I couldn't find anything.  
 -->>Mongoose has an _Id already built in so I used that.
*/

const loanSchema = new mongoose.Schema({
  
/*************************************************/
  ID_CUSTOMER: { 
    type: String, 
    require: [true,'You must enter a Customer ID'],
    unique: true,
    trim: true,
    maxlength: [40, 'A CUSTOMER number must have less or equal then 40 characters'],
    minlength: [10, 'A CUSTOMER number must have more or equal then 10 characters']
  },
/*************************************************/
  LOAN_TYPE: String,
/*************************************************/
  AMOUNT: Number,
/*************************************************/
  INTEREST_RATE: Number,
/*************************************************/
  LOAN_TERMS: String,
/*************************************************/
  START_DATE: { 
    type: Date, 
    default: Date.now,
    require: true
  },
/*************************************************/
  IS_DELETED: { 
    type: Boolean, 
    default: false 
  }
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});


const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;