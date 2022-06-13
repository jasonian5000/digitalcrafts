listOfItems = []

def toDoList():
    print("\n Welcome to your To Do List! What would you like to do?")
    selectTask()

def nextTask():
    print("\n What would you like to do next?")
    selectTask()

def selectTask():
    selection = input("""
    Press 1 to add item

    Press 2 to delete item

    Press 3 to view all items

    Press q to quit
    """)

    while selection.lower() != "q":
        
        if selection == "1":
            addItem()
        if selection == "2":
            delItem()
        if selection == "3":
            printItems()
        break

def addItem():
    itemToAdd = input("What item would you like to add to your To Do List? ")
    itemPriority = input("\n What is the priority of this item? (high, medium, low) ")
    newItem = Item(itemToAdd, itemPriority)
    listOfItems.append(newItem)
    printItems()

def delItem():
    itemToDelete = int(input("Select the number of the item you would like to delete: "))
    del listOfItems[itemToDelete-1]
    printItems()

def printItems():
    print("\n Here's you current To Do List!\n")
    for stuff in listOfItems:
        index = listOfItems.index(stuff) +1
        print(f"# {index} - {stuff.name.title()} - {stuff.priority.title()} Priority")
    nextTask()

class Item:
    def __init__(self, name, priority):
        self.name = name
        self.priority = priority

#sample list
newItem = Item("mow the yard", "high")
listOfItems.append(newItem)
newItem = Item("buy groceries", "medium")
listOfItems.append(newItem)
newItem = Item("sweep the floor", "low")
listOfItems.append(newItem)

toDoList()

