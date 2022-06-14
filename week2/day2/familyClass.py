class Parent:
    def __init__(self, firstName, lastName, eyeColor, hairColor, force):
        self.firstName = firstName
        self.lastName = lastName
        self.eyeColor = eyeColor
        self.hairColor = hairColor
        self.force = force

class Offspring(Parent):
    def __init__(self, firstName, lastName, eyeColor, hairColor, force, jedi):
        super().__init__(firstName, lastName, eyeColor, hairColor, force)
        self.jedi = jedi

class Sibling(Parent):
     def __init__(self, firstName, lastName, eyeColor, hairColor, force, politicalPosition):
        super().__init__(firstName, lastName, eyeColor, hairColor, force)
        self.politicalPosition = politicalPosition

vader = Parent("Darth", "Vader", "black", "black", "dark")
luke = Offspring("Luke", "Skywalker", "blonde", "blue", "light", True)
leia = Sibling("Leia", "Organa", "brown", "brown", "unknown", "Princess")

print(vader.force)
print(luke.force)
print(leia.politicalPosition)
print(luke.jedi)