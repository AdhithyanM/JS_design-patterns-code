function Member(name)
{
	this.name = name;
	this.chatRoom = null;   // reference to the chatroom that is currently in. 
}

Member.prototype = {
	// members are able to send messages to the chatroom
	send: function(message, receiver) {
			this.chatRoom.send(message, this, receiver);
	},
	// members are able to receive messages from the chatroom
	receive: function(message, sender) {
			console.log(`${sender.name} to ${this.name}:  ${message}`);
	}
}


// Mediator chatroom
function Chatroom()
{
	this.members = {};
}

Chatroom.prototype = {
	addMember: function(member) {
			this.members[member.name] = member;
			member.chatRoom = this;
	},
	send: function(message, sender, receiver) {
			receiver.receive(message, sender);
	}
}

const chat1 = new Chatroom();

const bob = new Member('bob');
const john = new Member('john');
const tim = new Member('tim');

chat1.addMember(bob);
chat1.addMember(john);
chat1.addMember(tim);

// instead of directly talking to each other, 
// we talk to chatroom and chatroom let's everybody else know a message is coming for them.

// bob sends msg to john
bob.send("hi John! Whatsup? ", john);
john.send("hey bob! How are you buddy? ", bob);
