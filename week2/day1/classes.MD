# Classes and How to Use Them


This is the bare minimum to define a class but this is useless
```
class User:
    pass
```
We need to add a constructor and add specific things to it that help us with our program

The constructor is the blueprint  of this class only.

`thing.name` is "dot notation"

```
def __init__(self):
```
This will run any time the class is instantiated 

METHOD is a function that is attached to(or within) a class

## Super Class
- Inheritance - a class inherits all the qualities from another class but has it's on qualities as well
```
class SuperEmployee(Employee):
    def __init__(self, same stuff, new stuff)
        super().__init__(same stuff) #allows new class to inherit everything while adding#
        self.securityLevel = new stuff
```
