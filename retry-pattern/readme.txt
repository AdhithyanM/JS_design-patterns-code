Retry:
    - A powerful pattern that allows us to gracefully handle temporary failures in our application whenever we make external calls
    
    - It enables us to retry any failed operations in our application.
    - Improves the overall stability and resiliance of our app.


Eg:
    - A computer sends a request to some external server.

    Case 1:
        - server receives and process the request successfully.
    Case 2:
        - In this scenario we run into some internet glitch which caused our connection to drop.
        - This leads to server not processing our request.
        - Not ideal. This req could be an critical operation for our app.
        Options:
            - we can retry sending the request to see if it passes.

    
    - If we run into a failure from the server, we could just keep retrying for it until it passes or some max retry items is reached.


Retry Strategies:
-----------------
    - dont retry
        - Certain failures doesn't make sense to retry. eg: invalid password, auth validation,...
    - retry immediately
        - Some circumstances are highly unusual.
        eg: a network packet becomes corrupted in the middle of the request and it fails. we should retry immediately as it is highly unlikely to occur again.
    - retry after delay
        - some server is busy handling high volume of request and ours get bombarded.
        - so we try after some delay in time to check if it works.
            - Fixed time delays (or) Exponential backoff methods.