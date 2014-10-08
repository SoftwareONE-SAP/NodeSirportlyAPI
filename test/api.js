/**
 * Sirportly V2 API test suite
 *
 * @category	sirportly
 * @package 	api
 * @author		Robert Pitt <rpitt@centiq.co.uk>
 * @copyright 	GPL V2
 * @version		1.0.1
 * @link	 	https://centiq.co.uk/
 */

/**
 * Require the API
 */
var SirportlyApi = require("../");

/**
 * 
 */
describe("SirportlyAPI", function(){
	var _global_config = {
		token 	: "e07ea360-5d45-ec98-e336-180496bd7b88",
		secret 	: "jw4yy5nehr6onzv2amqerv50f3qcy1v9rvox2smsdzcjjd2udd",
		server 	: "dev-support.centiq.co.uk",
		protocol: "http",
		port 	: 8090
	};

	/**
	 * Instantiate the API
	 */
	var api = new SirportlyApi(_global_config);


	describe("Reading configuration", function(){

		/**
		 * Fetch the configuration from the instance
		 * @type {Object}
		 */
		var config = api.getConfig();

		it("token", function(){
			if(_global_config.token !== config.token)
				throw new Error("token changed");
		});

		it("secret", function(){
			if(_global_config.secret !== config.secret)
				throw new Error("secret changed");
		});

		it("server", function(){
			if(_global_config.server !== config.server)
				throw new Error("server changed");
		});

		it("protocol", function(){
			if(_global_config.protocol !== config.protocol)
				throw new Error("protocol changed");
		});

		it("port", function(){
			if(_global_config.port !== config.port)
				throw new Error("port changed");
		});
	});

	describe("API Methods", function(){
		/**
		 * Ticket
		 */
		describe("tickets()", function(){
			it("should return a list of tickets from the server", function(done){
				api.tickets(1, function(err, tickets){
					if(err) throw err;
					if(!tickets || !tickets.records || !tickets.pagination)
						throw new Error("Ticket response invalid");

					done();
				});
			});
		});

		describe("ticket()", function(){
			it("should return the associated ticket from the server", function(done){
				api.tickets(1, function(err, ticket){
					if(err) throw err;

					/**
					 * Fetch the reference
					 */
					var id = ticket.records[0].reference;

					api.ticket(id, function(err, ticket){
						if(err) throw err;

						if(!ticket || !ticket.reference)
							throw new Error("Ticket response invalid");

						if(id !== ticket.reference)
							throw new Error("Ticket from server not the one requested");

						done();
					})
				})
			});
		});

		/**
		 * @todo the rest of the testing :p
		 */
	});
});