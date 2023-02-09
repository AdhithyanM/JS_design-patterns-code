function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

/*
Factory:
	- We have different functions for each object
	- There will be a common Factory function
	- That function will have atleast one method inside it called create
	- create method takes necessary inputs to create the object dynamically 
			based on the args received.
	- In this example type decides which object instance need to be created.
*/
function EmployeeFactory() 
{
	this.create = (name, type) => {
		switch(type) 
		{
			case 1:
				return new Developer(name);
				break;
			case 2:
				return new Tester(name);
				break;
		};
	};
}

function say() 
{
	console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

// create instance of our factory
const employeeFactory = new EmployeeFactory();
const employees = [];				// an empty array to assume as db.

employees.push(employeeFactory.create("John", 1));
employees.push(employeeFactory.create("Patrick", 2));
employees.push(employeeFactory.create("Tim", 2));
employees.push(employeeFactory.create("Jamy", 1));


employees.forEach( emp => {
	say.call(emp);
});
