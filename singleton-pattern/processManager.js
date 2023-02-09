function Process(state) 
{
	this.state = state;
}

/*
Singleton:
	- we create a variable
	- we set it equal to an immediately invoked func expression.
	- inside that func expr, we put an Object constructor for any object we want to limit.
	- store a reference of instance to the Object inside this function.
	- we can't able to call createObject method from the outside.
	- what we expose is an object that has a method called getInstance and inside of that 
			method we have check for singleton.
*/
const Singleton = (function(){
	function ProcessManager()
	{
		this.numProcess = 0;
	}

	let pManager;

	function createProcessManager()
	{
		pManager = new ProcessManager();
		return pManager;
	}

	return {
		getProcessManager: () => {
			if(!pManager)
				pManager = createProcessManager();
			
			return pManager;
		}
	};
})(); 


const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);