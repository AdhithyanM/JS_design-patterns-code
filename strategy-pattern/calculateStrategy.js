function Fedex() 
{
	this.calculate = package => {
		// fedex calculations
		return 2.75;
	}
}

function UPS()
{
	this.calculate = package => {
		// ups calculations
		return 1.34;
	}
}

function USPS()
{
	this.calculate = package => {
		// usps calculations
		return 1.84;
	}
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = {
	from: 'India',
	to: 'Canada',
	weight: 1.45
};

// fedex(package);
// ups(package);
// usps(package);

// Implementation of Strategy Pattern
// It encapsulates our fedex, ups, usps strategies in a well manner

function Shipping()
{
	this.company;
	this.setStrategy = (company) => {
		this.company = company;
	}
	this.calculate = package => {
		if(!this.company)
			throw new Error("Invoke setStrategy before using methods.");
		return this.company.calculate(package);
	}
}

const shipping = new Shipping();

// calc for fedex
shipping.setStrategy(fedex);
console.log(shipping.calculate(package));
// calc for ups
shipping.setStrategy(ups);
console.log(shipping.calculate(ups));
// calc for usps
shipping.setStrategy(usps);
console.log(shipping.calculate(usps));
