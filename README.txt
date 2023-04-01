***Add a customer (post)***
>>COPY/PASTE the below into postman
{
	"ID_CUSTOMER": "123456789",
    "EMAIL":"mike@brown.com",
	"LOAN_TYPE": "Mortgage",
	"AMOUNT": "500",
	"INTEREST_RATE": "5",
	"LOAN_TERMS": "360"
}

***Read a customer (GET)***
>>COPY/PASTE the below into postman
>>copy the _ID value that is returned
{
	"ID_CUSTOMER": "123456789"
}

***Update a customer (PATCH)***
>>COPY/PASTE the below into postman
>>Place the _ID value into the address.  For example http://localhost:3000/loan/6427a02f8cd3881940374fc0
{
	"LOAN_TYPE": "Auto"
}