# 1 class at a minimum
# functions
# for loops
# while loops
# list
# variables
# adding/removing aspects about your class
# the ability to exit the game
# the ability to replay the game
# clean code
# aim for mvp first
# updated repo with a readme that explain your project, how to run it, and a link to your medium or dev.to article
# dev.to or medium article about your project and what you did
import os
def clear():
    os.system('clear')

def playAgain():
    choice=input("Would you like to play again? Y or N \n")
    while choice.lower() != "n" and choice.lower() != "y":
        choice=input("Would you like to play again? Y or N \n")
    if choice.lower() == "y":
        game()
    if choice == "n":
        quit()


def intro():
    clear()
    print("******************************************")
    intro1=input("Welcome to the Mythical Hospital! (press Enter)")
    clear()
    intro2=input("You are our new doctor from the realm of humans. (press Enter)")
    clear()
    intro3=input("My name is Karen and I'm the HR onboarding specialist. (press Enter)")
    clear()
    intro4=input("I'm a ghoul so this is the only job they would give me... (press Enter)")
    clear()
    intro5=input("Anyway. You volunteered to work at the Mythical Hospital to help pay for your student loans. (press Enter)")
    clear()
    intro6=input("If you are able to cure enough of our mythical patients then your student loan will be paid off and you can leave. (press Enter)")
    clear()
    intro7=input("If a patient doesn't like you though... well just sign this waiver.")
    waiver=input("Sign the waiver? Y or N \n")
    while waiver.lower() != "n" and waiver.lower() != "y":
        waiver=input("Sign the waiver? Y or N \n")
    if waiver.lower() == "y":
        print("Great! Welcome aboard!")
        createDoctor()
    if waiver == "n":
        print("Sorry to hear that. BUT no waiver no job. Welcome to the real world. Byeee")
        playAgain()   

class Doctor:
    def __init__(self, name, debt):
        self.name=name
        self.debt=debt

def createDoctor():
    global doctor
    doctor=Doctor(input("Let's get you a name tag! What's your name doctor? (Enter name or q to quit)) \n").title(), 1000000)
    while len(doctor.name)==0 and doctor.name.lower() != "q":
        doctor=Doctor(input("Let's get you a name tag! What's your name doctor? (Enter name or q to quit) \n"), 1000000)
        if doctor.name == "q":
            quit()
    if len(doctor.name)>0:
        debt="${:,.0f}".format(doctor.debt)
        clear()
        print(f"Great Doctor {doctor.name}! You're current student loan debt is {debt}... GOOD LUCK!")
        next=input("Let's get you started with your first patient! (press Enter)")
        treatPatient()

class Creature:
    def __init__(self, name, money,health=50):
        self.name=name
        self.money=money
        self.health=health

creaturesList=[]
creaturesList.append(Creature("Werewolf", 20000))
creaturesList.append(Creature("Dragon", 500000))
creaturesList.append(Creature("Mermaid", 200000))
creaturesList.append(Creature("Sphinx", 500000))
creaturesList.append(Creature("Medusa", 400000))
creaturesList.append(Creature("Vampire", 500000))

def treatPatient():
    for creature in creaturesList:
        print(f"# {creaturesList.index(creature)+1} - {creature.name}")
    selection=int(input("Which patient would you like to treat first? (Select 1-6)\n"))
    if selection == "1":
        break
    if selection == 2:
        break
    if selection == 3:
        break
    if selection == 4

    
#intro()
createDoctor()
print(doctor.name)