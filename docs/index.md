Global
===




**Members:**

+ endpoint
+ options
+ body_json

---

SirportlyAPI() 
-----------------------------
Sirportly API Class


request(uri, options, callback) 
-----------------------------
make a request to the API

**Parameters**

**uri**: String, Path for the request

**options**: Object, Request parameters, see @request

**callback**: function, Callback


ticket(ticket_reference, callback) 
-----------------------------
Fetch a specific ticket object

**Parameters**

**ticket_reference**: String, Ticket Reference ID

**callback**: function, Callback


tickets(page, callback) 
-----------------------------
Fetch a list of tickets

**Parameters**

**page**: Number | function, Page or callback, page wil default to 1 if not present

**callback**: function, Callback


create_ticket(params, callback) 
-----------------------------
Create a new Ticket

**Parameters**

**params**: Object, Ticket Parameters

**callback**: function, Callback


post_update(reference, updates, callback) 
-----------------------------
Post an update to a ticket

**Parameters**

**reference**: String, Ticket Reference

**updates**: Object, Updates

**callback**: function, Callback


update_ticket(reference, updates, callback) 
-----------------------------
Update a tickets properties

**Parameters**

**reference**: String, Ticekt Reference

**updates**: Object, Updates for the ticket

**callback**: function, Callback


run_macro(reference, macro, callback) 
-----------------------------
Execute a macro

**Parameters**

**reference**: String, Ticket Reference

**macro**: String | Number, Macro name or id

**callback**: function, Callback


add_follow_up(reference, params, callback) 
-----------------------------
Add afollow up to a ticket

**Parameters**

**reference**: String, Ticket Reference

**params**: Object, parameters for the request

**callback**: function, Callback


statuses(callback) 
-----------------------------
Request Statuses

**Parameters**

**callback**: function, Callback


priorities(callback) 
-----------------------------
Request Priorities

**Parameters**

**callback**: function, Callback


teams(callback) 
-----------------------------
Request Teams

**Parameters**

**callback**: function, Callback


brands(callback) 
-----------------------------
Request Brands

**Parameters**

**callback**: function, Callback


departments(callback) 
-----------------------------
Request Departments

**Parameters**

**callback**: function, Callback


escalation_paths(callback) 
-----------------------------
Request Escalation Paths

**Parameters**

**callback**: function, Callback


slas(callback) 
-----------------------------
Request SLA's

**Parameters**

**callback**: function, Callback


filters(callback) 
-----------------------------
Request Filters

**Parameters**

**callback**: function, Callback


SirportlyError() 
-----------------------------
Define the error Class



---








