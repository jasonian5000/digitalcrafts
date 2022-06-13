from turtle import window_height
from unicodedata import name


class User:
    # name
    # height
    # siblings
    # weight
    # greeting

    #This way is hardcoded so all instances will have these properties
    # def __init__(self):
    #     self.name = "Amanda"
    #     self.height = "7.3ft"
    #     self.weight = "nunya"
    #     self.siblings = "Joe"
    #     self.greeting = "Hey guys"


    #This way allows us the use the same thing without rewriting the code
    def __init__(self, name, height, weight, siblings, greeting):
        self.name = name
        self.height = height
        self.weight = weight    
        self.siblings = siblings
        self.greeting = greeting    

rahmin = User("Rahmin")
print(rahmin)