function Employee(name, salary)
{
	this.name = name;
	this.salary = salary;
}

Employee.prototype = {
	getSalary: function() {
			return this.salary;
	},
	setSalary: function(salary) {
			this.salary = salary;
	},
	// An accept method that takes in a visitor fn and gives it access to this object
	accept: function(visitorFunction) {
			visitorFunction(this);  // we give reference to this object to the visitor function.
	}
}


const emp1 = new Employee('emp1', 10000);
console.log(emp1.getSalary());


// visitor function
function ExtraSalary(emp)
{
	emp.setSalary(emp.getSalary() * 1.5);   // increment current salary by 50%
}

emp1.accept(ExtraSalary);
console.log(emp1.getSalary());