/*
- Builder Pattern:
	- the object that you want to build.
	- separate class or constructor function that acts as the object builder.
*/

function Person(name, weight, height, gender)
{
	this.name = name;
	this.weight = weight;
	this.height = height;
	this.gender = gender;
}

// we are separating the object construction from its representation.
// construction is handled by this builder function.
function PersonBuilder(name, gender)
{
	// can be mandatory values
	this.name = name;
	this.gender = gender;

	// mechanism to pass optional values
	this.setWeight = function(weight) {
		this.weight = weight;
		return this;
	}

	this.setHeight = function(height) {
		this.height = height;
		return this;
	}

	// must have function for builder to build the actual object construction
	this.build = function() {
		return new Person(this.name, this.weight, this.height, this.gender);
	}
}



const abhi = new Person('abhi', 5, 2.3, 'male');

const vicky = new PersonBuilder('vicky', 'male').setHeight(6).setWeight(90).build();

console.log(abhi);
console.log(vicky);