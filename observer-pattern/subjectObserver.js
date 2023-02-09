// Subject
function Subject()
{
	// it needs to keep track of all of the observers that are currently looking at it.
	this.observers = [];      // an array of observer functions.
}

// Few methods to our Subject
Subject.prototype = {
	subscribe: function(fn) {
		/*
			- This subscribe method takes an observer fn as parameter
			- The observer fn says I want to subscribe to this subject.
			- Whenever this subject send some signal, I need to know about it.	
		*/
		this.observers.push(fn);
	},
	unsubscribe: function(fnToRemove) {
		// remove the observer fn from observers.
		this.observers = this.observers.filter( fn => {
			if(fn != fnToRemove) {
				return fn;
			}
		});
	},
	fire: function() {
		// This function notifies every observer that is currently subscribed to this subject.
		this.observers.forEach( fn => {
			fn.call();
		});
	}
}

const subject = new Subject();

// Observer Functions
function Observer1()
{
	console.log("Observer 1 firing..");
}
function Observer2()
{
	console.log("Observer 2 firing..");
}

// let our observers subscribe to our subject
subject.subscribe(Observer1);
subject.subscribe(Observer2);


// fire an event from our subject.
subject.fire();