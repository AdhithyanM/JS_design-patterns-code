Visitor:
    - Behavioural
    - It allows us to add or provide new operations and methods to an object
    - without actually changing that object itself.
    - the new funcitonality and logic is kept in a separate object known as the visitor object.

    - Visitor objects are useful when it comes to extending some library or framework.
    - the object you want to extend also known as receiving object
    - must have some kind of accept method that takes in the visitor object 
    - and provides the visitor object access to the different info and property for that object.

    - Not very popular in JS. but still its useful to know.


Scenario:
---------
- An employee class. employee will have name, salary. 
- It will have getSalary and setSalary methods
- Need the funcitonality to be extended using visitor pattern.