// External API Service
function CryptocurrencyAPI()
{
	// this API service is going to have a method to call external APIs
	this.getValue = function(coin) {
		console.log("Calling External API...");
		switch(coin)
		{
			case "BTC":
				return "22,500";
			case "ETH":
				return "1500";
			case "SOL":
				return "23";
		};
	};
}

// Let us make calls to our external API service
const api = new CryptocurrencyAPI();

// console.log(api.getValue("BTC"));
// console.log(api.getValue("ETH"));
// console.log(api.getValue("SOL"));
// console.log(api.getValue("BTC"));
// console.log(api.getValue("ETH"));
// console.log(api.getValue("SOL"));
// console.log(api.getValue("BTC"));
// console.log(api.getValue("ETH"));
// console.log(api.getValue("SOL"));

/*
	- so we simulated calling our external API by making 3 calls (request) to it.
	- lets say our program going to make lot of repeated requests to this API ?
	- Remember these are network requests and it takes some time retrieving that data.
	- It would be nice if we didn't call the API every single time we wanted to retrieve a value.

	- what if we have an object or a proxy in the middle of the process that talks to the api for us ? 
	- this proxy is helpful so we can add some extra functionalities in between. 
	eg: cache

	- So instead of calling the externalAPI directly like above we call our proxy by passing the coin we want value for
	- if the proxy already has value already for this coin, it don't need to call the API again and returns from cache.
	- if it doesn't has value for a coin, it retrieves from API and stores it in proxy cache so next time we don't need to make external API call.

	- for this use case it saves network latency and makes our program faster.
*/

function CryptocurrencyProxy()
{
	// this proxy needs to talk to the API so it maintains its own instance of it.
	this.api = new CryptocurrencyAPI();
	this.cache = {};

	// use same methods as our API here 
	this.getValue = function(coin) {
		if(this.cache[coin] == null) {
			this.cache[coin] = this.api.getValue(coin);
		}
		return this.cache[coin];
	}
}

// testing our proxy:
const proxy = new CryptocurrencyProxy();

console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("BTC"));

console.log(proxy.getValue("ETH"));
console.log(proxy.getValue("SOL"));
console.log(proxy.getValue("ETH"));
