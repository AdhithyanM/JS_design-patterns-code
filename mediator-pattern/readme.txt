Mediator:
    - Behavioural
    - It allows us to define an object known as the Mediator that encapsulates and controls how some set of objects interact with each other.
    
    - let's say we have 3 objects and these need to communicate with each other to share information.
    - instead of sending info directly to and from each other, these objects can send their messages to one mediator object
    - and the mediator takes those messages and handles those complex routing logic of where this info needs to be going.

    - eg: chatroom.
        - each one will send messages to and from each other but they sent it via a chatroom mediator object.
