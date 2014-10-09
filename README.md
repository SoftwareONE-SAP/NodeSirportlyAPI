NodeJS Sirportly API
======
This library is designed to help you quickly and easily integrate your nodeJS application with a sirportly ticket server.

We have created this API to be as simple and easy to use ass possible

#### Example instance
```js

// Required the library
var SirportlyAPI = require("sirportly-api");

// Instantiate the class and create an instance
var api = new SirportlyAPI({
    token:  "<api-token>",
    secret: "<api-secret>",
    server: "support.domain.tld" 
});
```

You can now use your `api` instance to communicate with the sirportly API Server

#### Requesting a ticket
```js
api.ticket("<ticket-refernce>", function(err, ticket){
    console.log(ticket.reference);
});
```

#### Listing Tickets
```js
api.tickets(1, function(err, tickets){
    for(var ticket in tickets) {
        console.log(ticket.reference);
    }
});
```

### Submitting a new Ticket
```js
api.create_ticket({
    subject:             "Sample Subject",
    status:              "<status-name>",
    priority:            "<priority-name>",
    team:                "<team-name>",
    sla:                 "<sla-name>",
    brand:               "<brand-name>",
    department:          "<department-name>",
    contact_method_type: "<contact-method-type>",
    contact_method_data: "<contact-method-date>",
    contact_name:        "<contact-name>"
}, callback);
```

### All methods
ticket(reference, callback) 
-----------------------------
Fetch a specific ticket object

**Parameters**

**reference**: String, Ticket Reference ID

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
