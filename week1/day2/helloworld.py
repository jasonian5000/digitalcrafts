print("Hello World")

def sayHi():
    print("Hi")

sayHi()

# Dictionary/Object
randomData = {
    "key": "value",
    "string": "string", 
    "integer": 1, 
    "boleon": True, 
    "float": 1.0, 
    "list":["one", "two"],
    "confusing": [{"name": "Joe"}]
    }
#nested dictionaries and lists
print(randomData["list"][0])
print(randomData["confusing"][0]["name"])



