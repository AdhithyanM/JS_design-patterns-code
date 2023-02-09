//             v
const items = [1, "jstutorial", false, 1.25];

// Iterator Function
function Iterator(items)
{
	// store the reference of collection we want to iterate through
	this.items = items;
	// and the index where it points to
	this.index = 0;
}

// methods for our Iterator
Iterator.prototype = {
	// 2 critical methods that an Iterator must have
	
	// hasNext - returns true/false if there is any more elements in this collection.
	hasNext: function() {
		return this.index < this.items.length;
	},
	// next - returns the next available element in our collection
	next: function() {
		return this.items[this.index++];
	}

	// Above iterator is Forward iterator.
}

// Create instance of our Iterator
const itr = new Iterator(items);
console.log(itr);
while(itr.hasNext()) {
	console.log(itr.next());
}

