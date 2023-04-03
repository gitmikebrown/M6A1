***Add a customer (post)***
	1. COPY/PASTE the below into postman (http://localhost:3000/loan)
		{
			"ID_CUSTOMER": "987654321",
			"EMAIL":"mike@brown.edu",
			"LOAN_TYPE": "Mortgage",
			"AMOUNT": "2000",
			"INTEREST_RATE": "5",
			"LOAN_TERMS": "360"
		}
	2. Select POST and Click send.

***Read a customer (GET)***
	3. COPY/PASTE the below into postman.
		{
			"ID_CUSTOMER": "987654321"
		}
	4. Select GET and click Send. (http://localhost:3000/loan)
	5. Copy the _ID value that is returned

***Update a customer (PATCH)***
	6. Place the _ID value into the address.  For example http://localhost:3000/loan/6427a02f8cd3881940374fc0
	7. COPY/PASTE the below into postman
		{
			"LOAN_TYPE": "Auto"
		}
	8. Select PATCH and press send.

***Delete a customer (DELETE)***
	9. Keep the same address, but now select Delete and click send