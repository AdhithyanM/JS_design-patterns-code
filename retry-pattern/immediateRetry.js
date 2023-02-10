function retryOperation()
{
  let currentTry = 1;
	const maxTry = 3;

	while(true) {
		try {
			externalServiceCall();
			console.log("External service call completed successfully");
			break;
		} 
		catch (error) {
			console.log(` --- Attempt ${currentTry}: \n${error}`);
			currentTry++;

			if(currentTry > maxTry) {
				console.log("Retry maximum reached. Exiting");
				break;
			}
		}
	}

}

function externalServiceCall()
{
	console.log("Calling external service..");
	const shouldPass = Math.random() > 0.5;
	if(shouldPass)
		return true;
	else
		throw new Error("Some error occured");
}

retryOperation();