const mongoose = require('mongoose');

/*NOTES
"ID: INT, //IDENTITY (30001, 1)" 
-->>I tried to find something to get the Identity function to work.  I couldn't find anything.  
 -->>Mongoose has an _Id already built in so I used that.

 "NAME: String"
-->>I took this out as there is a first, middle, and last name already
*/


const customerSchema = new mongoose.Schema({
    FIRST_NAME: String,
/*************************************************/
    MIDDLE_NAME: String,
/*************************************************/
    LAST_NAME: String,
/*************************************************/
    DATE_OF_BIRTH: Date,
/*************************************************/
    GENDER: String,
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

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;