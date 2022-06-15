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
        intro()
    if choice == "n":
        quit()


def intro():
    clear()
    print("******************************************")
    intro1=input("Welcome to the Mythical Hospital! (press Enter)")
    intro2=input("You are our new doctor from the realm of humans. (press Enter)")
    intro3=input("My name is Karen and I'm the HR onboarding specialist. (press Enter)")
    intro4=input("I'm a ghoul so this is the only job they would give me... (press Enter)")
    intro5=input("Anyway. You volunteered to work at the Mythical Hospital to help pay for your student loans. (press Enter)")
    intro6=input("If you are able to cure enough of our mythical patients then your student loan will be paid off and you can leave. (press Enter)")
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
    def __init__(self, name, money, ailment, treatment1, treatment2, treatment3, youlose, curedMessage, health=2):
        self.name=name
        self.money=money
        self.ailment=ailment
        self.treatment1=treatment1
        self.treatment2=treatment2
        self.treatment3=treatment3
        self.youlose=youlose
        self.curedMessage=curedMessage
        self.health=health

    def healthCheck(self):
        if self.health == 0:
            print("None of you treatments worked!")
            print(self.youlose)
            playAgain()
            
    def cured(self):
        print("This treatment seems to be working! Your patient is cured!")
        print(self.curedMessage)


    def loseHealth(self):
        print("This treatment is not working. Your patient is getting worse..")
        print("What would you like to do now? \n")
        self.health -= 1

creaturesList=[]
creaturesList.append(Creature("Werewolf", 20000, "This werewolf has cursed fleas.", "Shave him.", "Give him a bath.", 
    "Scratch him vigorously.", "He doesn't like that at all! The werewolf bites you in terrible places. You die.", 
    "He is very grateful. Unfornately this is one of those biker werewolves and he doesn't have any money. His very basic insurance pays you $20,000."))
creaturesList.append(Creature("Dragon", 500000, "This dragon has a sore throat.", "Give her chamomile tea with organic honey.", "Feed her a tiny goat covered in molasses.",
    "Get her drunk.", "The dragon unexpectedly coughs and you are horribly burned to death. Bummer.",
    "This is one of those dragons that sits in a cave full of gold! She gives you $500,000 worth of stolen dwarf booty!"))
creaturesList.append(Creature("Mermaid", 200000, "This mermaid has swimmer's ear.", "Hold her upside down and slap her.", "Have her stick her thumb in her mouth and blow.",
    "Put an octopus sucker against her ear and pull it away repeatedly.",
    "She is very disappointed in you. She holds you tightly as you sink to the bottom of the ocean. You fade into darkness. Goodbye.",
    "She is so grateful! She kisses you sweetly and gives you $200,000 worth of Spanish doubloons from a sunken ship!"))
creaturesList.append(Creature("Sphinx", 500000, "This sphinx has a running nose.", "Clean the sand out of her nose with a giant q-tip.", 
    "Irrigate her nose with water from the Dead Sea.", "Do the \"Walk like an Egyptian\" dance until she chortles really hard.",
    "The sphinx asks you a riddle. It's more of a dad joke really but she takes your groan to be an incorrect answer. You are devoured by angry mummies.", 
    "The sphinx is very pleased! She gives you $500,000 worth of Egyptian gold. She cleared it with the Egyptian government so we're all good."))
creaturesList.append(Creature("Medusa", 400000, "This medusa is having a really bad hair day.", "Play one of those Indian flutes(a pungi) to sooth her snakey hair.", 
    "Braid it into corn rows.", "Tell her, \"Beauty is in the eye of the beholder.\" and give her a mirror.", 
    "She's very upset about her hair. Her snakes bite you many, many, many times. You gaze upon her to make the hurting stop. You are stone.", 
    "Great job! She feels smart and sassy again. She gives you treasure she acquired from some unfortunate Argonauts worth $400,000!"))
creaturesList.append(Creature("Vampire", 500000, "This vampire has a sunburn.", "Slather him with 50 gallons of aloe gel.", "Wrap him up in gauze like a mummy.",
    "Interview him about the centuries of his life until he forgets about the sunburn.", 
    "He is anrgy and decides to drain you like a Capri Sun. It cures his sunburn but you have no blood. You become a vampire and retire from the doctor life.",
    "He's is very happy! He decides not to drink your blood. He gives you some old timey British stuff worth $500,000!"))

def treatPatient():
    for creature in creaturesList:
        print(f"# {creaturesList.index(creature)+1} - {creature.name}")
    selection=input("Which patient would you like to treat first? (Select a number and press Enter)\n")
    if selection == "1":
        pass
    if selection == "2":
        pass
    if selection == "3":
        pass
    if selection == "4":
        pass
    if selection == "5":
        pass
    if selection == "6":
        pass
    else:
        treatPatient()

    
#intro()
createDoctor()
print(doctor.name)