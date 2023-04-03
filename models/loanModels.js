const mongoose = require('mongoose');
//const expressValidator = require('express-validator');

/*NOTES
 "LOAN_NUMBER: Number,"  
 -->>The mongoDb _ID will act as the loan number.  I took this out because of that.
*/

const loanSchema = new mongoose.Schema({
  
/*************************************************/
  ID_CUSTOMER: { 
    type: String, 
    require: [true,'You must enter a Customer ID'],
    unique: true,
    trim: true
  },
  /*************************************************/
  EMAIL:{
    type: String,
    validate: {
      validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      message: (props) => `${props.value} is not a valid email address`,
      maxlength: [80, 'A CUSTOMER number must have less or equal then 80 characters'],
      minlength: [7, 'A CUSTOMER number must have more or equal then 7 characters']
    }

  },
/*************************************************/
  LOAN_TYPE: {
    type: String,
    enum: {
      values: ['Mortgage','mortgage','Auto','auto'], 
      message:'{VALUE} is not supported'}
  },
/*************************************************/
  AMOUNT: {
    type: Number,
    min: [1000, 'Must be at least 1000, got {VALUE}'],
    max: [1000000, 'Cannot be more than $1,000,000, got {VALUE}'],
  },
/*************************************************/
  INTEREST_RATE: Number,
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
/*************************************************/
/*************************************************/  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});


const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;