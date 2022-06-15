import random
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
    print(r"""
    ******************************************
    *    Welcome to the Mythical Hospital    *
    ******************************************
          _________________________
         /////////////|\\\\\\\\\\\\\
        '.-------------------------.'
         |                         |
         | [] [] [] [] [] [] [] [] |
         |                         |
         |    Mythical Hospital    |         
       _.-.        _ _ _ _         |
       >   )] [] []||_||||[] [] [] |,'`\
       `.,'________||___||_________|\  <
        ||  /  _<> _     _    (_)<>\ ||
        '' /<>(_),:/     \:. <>'  <>\||
        __::::::::/ _ _ _ \:::::::::::_
       __________           ___________
          ,.::. /           \  _________
          `''''/             \ \:'-'-'-'-
           SSt||             || \\    
    """)
    intro=input("Press Enter to Start")
    clear()
    intro=input("You are our new doctor from the realm of humans. (press Enter)")
    print(r"""
              -. -. `.  / .-' _.'  _
             .--`. `. `| / __.-- _' `
            '.-.  \  \ |  /   _.' `_
            .-. \  `  || |  .' _.-' `.
          .' _ \ '  -    -'  - ` _.-.
           .' `. %%%%%   | %%%%% _.-.`-
         .' .-. ><(@)> ) ( <(@)>< .-.`.
           (("`(   -   | |   -   )'"))
          / \\#)\    (.(_).)    /(#//\
         ' / ) ((  /   | |   \  )) (`.`.
         .'  (.) \ .md88o88bm. / (.) \)
           / /| / \ `Y88888Y' / \ | \ \
         .' / O  / `.   -   .' \  O \ \\
          / /(O)/ /| `.___.' | \\(O) \
           / / / / |  |   |  |\  \  \ \
          / / // /|  |   |  |  \  \ \  VK
         _.--/--/'( ) ) ( ) ) )`\-\-\-._
        ( ( ( ) ( ) ) ( ) ) ( ) ) ) ( ) )    
    """)
    intro=input("I'm Karen the Ghoul and I'm the HR onboarding specialist. (press Enter)")
    intro=input("I see you volunteered to work at the Mythical Hospital to help pay for your student loans. (press Enter)")
    intro=input("If you are able to cure enough of our mythical patients then your student loan will be paid off and you can leave. (press Enter)")
    intro=input("If a patient doesn't like you though... well just sign this waiver. (press Enter)")
    waiver=input("Sign the waiver? Y or N \n")
    while waiver.lower() != "n" and waiver.lower() != "y":
        waiver=input("Sign the waiver? Y or N \n")
    if waiver.lower() == "y":
        clear()
        print("Great! Welcome aboard!")
        createDoctor()
    if waiver == "n":
        print("Sorry to hear that. BUT no waiver no job. Welcome to the real world. Byeee")
        playAgain()   

class Doctor:
    def __init__(self, name, debt):
        self.name=name
        self.debt=debt

    def getMoney(self, money):
        self.debt -= money

    def debtCheck(self):
        if doctor.debt <= 0:
            print("\n\nYou paid off your student loan! Now you can move on to bigger and better things.")
            playAgain()

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
    def __init__(self, name, money, ailment, treatment1, treatment2, treatment3, youlose, curedMessage, art, health=2):
        self.name=name
        self.money=money
        self.ailment=ailment
        self.treatment1=treatment1
        self.treatment2=treatment2
        self.treatment3=treatment3
        self.youlose=youlose
        self.curedMessage=curedMessage
        self.art=art
        self.health=health

    def healthCheck(self):
        if self.health == 0:
            clear()
            print("None of your treatments worked!")
            print(self.youlose)
            playAgain()
            
    def cured(self):
        clear()
        print("This treatment seems to be working! Your patient is cured!\n")
        print(self.curedMessage)

    def loseHealth(self):
        self.health -= 1

    def treatmentOptions(self):
        print(self.art)
        print(self.ailment)
        print("""
        ***************************
              Treatment Options
        ***************************
        """)
        print(f"# 1 - {self.treatment1}")
        print(f"# 2 - {self.treatment2}")
        print(f"# 3 - {self.treatment3}")

creaturesList=[]
creaturesList.append(Creature("Werewolf", 100000, "This werewolf has cursed fleas.", "Shave him.", "Give him a bath.", 
    "Scratch him vigorously.", "He doesn't like that at all! The werewolf bites you in terrible places. You die.", 
    "He is very grateful. Unfornately this is one of those biker werewolves and he doesn't have any money. His very basic insurance pays you $100,000.",
    r"""
                /\
            ( ;`~v/~~~ ;._
            ,/'"/^) ' < o\  '".~'\\\--,
        ,/",/W  u '`. ~  >,._..,   )'
        ,/'  w  ,U^v  ;//^)/')/^\;~)'
    ,/"'/   W` ^v  W |;         )/'
    ;''  |  v' v`" W }  \\
"    .'\    v  `v/^W,) '\)\.)\/)
            `\   ,/,)'   ''')/^"-;'
                \
                '". _
                    \    
    """))
creaturesList.append(Creature("Dragon", 600000, "This dragon has a sore throat.", "Give her chamomile tea with organic honey.", "Feed her a tiny goat covered in molasses.",
    "Get her drunk.", "The dragon unexpectedly coughs and you are horribly burned to death. Bummer.",
    "This is one of those dragons that sits in a cave full of gold! She gives you $600,000 worth of stolen dwarf booty!",
    r"""
                \||/
                |  @___oo
      /\  /\   / (__,,,,|
     ) /^\) ^\/ _)
     )   /^\/   _)
     )   _ /  / _)
 /\  )/\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \)___)\
 | \____(      )___) )___
  \______(_______;;; __;;;
    """))
creaturesList.append(Creature("Mermaid", 200000, "This mermaid has swimmer's ear.", "Hold her upside down and slap her.", "Have her stick her thumb in her mouth and blow.",
    "Put an octopus sucker against her ear and pull it away repeatedly.",
    "She is very disappointed in you. She holds you tightly as you sink to the bottom of the ocean. You fade into darkness. Goodbye.",
    "She is so grateful! She kisses you sweetly and gives you $200,000 worth of Spanish doubloons from a sunken ship!",
    r"""
                           .-""-.
                          (___/\ \
        ,                 (|^ ^ ) )
       /(                _)_\=_/  (
 ,..__/ `\          ____(_/_ ` \   )
  `\    _/        _/---._/(_)_  `\ (
    '--\ `-.__..-'    /.    (_), |  )
        `._        ___\_____.'_| |__/
           `~----"`   `-.........'
    """))
creaturesList.append(Creature("Sphinx", 500000, "This sphinx has a running nose.", "Clean the sand out of her nose with a mummy on a pole.", 
    "Irrigate her nose with water from the Dead Sea.", "Do the \"Walk like an Egyptian\" dance until she snort-laughs really hard.",
    "The sphinx asks you a riddle. It's more of a dad joke really but she takes your groan to be an incorrect answer. You are ripped apart by angry mummies.", 
    "The sphinx is very pleased! She gives you $500,000 worth of Egyptian gold. She cleared it with the Egyptian government so we're all good.",
    r"""
                              .sSSSSSSSs
                              sSS=""^^^"s
                  /\       , /  \_\_\|_/_)
                 /';;     /| \\\/.-. .-./
                / \;|    /. \,S'  -   - |
               / -.;|    | '.SS     _|  ;
              ; '-.;\,   |'-.SS\   __  /S
              | _  ';\\.  \' SSS\_____/SS
              |  '- ';\\.  \_SSS[_____]SS
              \ '--.-';;-. __SSS/\    SSS
               \  .--' ';;'.=SSS`\\_\_SSS
                `._ .-'` _';;..=.=.=.\.=\
                   ;-._-'  _.;\.=.=.=.|.=|
         ,     _.-'    `"=._  ;\=.=__/__/
         )\ .'`   __        ".;|.=.=.=./
         (_\   .-`  '.   |    \/=.=.=/`
          /\\         \-,|     |.--'|
         /  \`,       //  \    | |  |
        ( (__) )  _.-'--,  \   | |  '--,
         ;----' -'--,__}}}  \  '--, __}}}
         \_________}}}       \___}}}    
    """))
creaturesList.append(Creature("Medusa", 400000, "This medusa is having a really bad hair day.", "Play a pungi (one of those Indian flutes) to sooth her snaky hair.", 
    "Braid her snake hair into corn rows.", "Tell her, \"You fine anyway girlfriend.\"", 
    "She's very upset about her hair. Her snakes bite you many, many, many times. You gaze upon her to make the hurting stop. You are stone.", 
    "Great job! She feels smart and sassy again. She gives you treasure she acquired from some unfortunate Argonauts worth $400,000!",
    r"""
                   ,--.
          ,--.  .--,`) )  .--,
       .--,`) \( (` /,--./ (`
      ( ( ,--.  ) )\ /`) ).--,-.
       ;.__`) )/ /) ) ( (( (`_) )
      ( (  / /( (.' "-.) )) )__.'-,
     _,--.( ( /`         `,/ ,--,) )
    ( (``) \,` ==.    .==  \( (`,-;
     ;-,( (_) ~6~ \  / ~6~ (_) )_) )
    ( (_ \_ (      )(      )__/___.'
    '.__,-,\ \     ''     /\ ,-.
       ( (_/ /\    __    /\ \_) )
        '._.'  \  \__/  /  '._.'
            .--`\      /`--.
                 '----'     
    """))
creaturesList.append(Creature("Vampire", 300000, "This vampire has a sunburn.", "Slather him with 5 gallons of aloe gel.", "Wrap him up in gauze like a mummy.",
    "Interview him about the centuries of his life until he forgets about the sunburn.", 
    "He is anrgy and decides to drain you like a Capri Sun. It cures his sunburn but you have no blood. You become a vampire and retire from the doctor life.",
    "He is very happy! He decides not to drink your blood. He gives you some old timey British stuff worth $300,000!",
    r"""
        .-''''.
       /       \
   __ /   .-.  .\
  /  `\  /   \/  \
  |  _ \/   .==.==.
  | (   \  /____\__\
   \ \      (_()(_()
    \ \            '---._
     \                   \_
  /\ |`       (__)________/
 /  \|     /\___/
|    \     \||VV
|     \     \|'''',
|      \     ______)
\       \  /`
         \(
    """))

def treatPatient():
    print("""
        **********************
             Patient List
        **********************
        """)
    for creature in creaturesList:
        print(f"# {creaturesList.index(creature)+1} - {creature.name}")
    selection=input("\nWhich patient would you like to treat? (Select a number and press Enter)\n")
    while selection.isdigit() == False or 1 > int(selection) or int(selection) > len(creaturesList):
        selection=input("Which patient would you like to treat? (Select a number and press Enter)\n")
    i=int(selection)-1
    correct=random.randint(1,3)
    clear()
    print(f"For testing purposes: The correct answer is {correct}.")
    creaturesList[i].treatmentOptions()
    treatment=input("\nHow would you like to treat the patient? (Select 1, 2, or 3)\n")
    while treatment.isdigit() == False or 1 > int(treatment) or int(treatment) > 3:
        treatment=input("\nHow would you like to treat the patient? (Select 1, 2, or 3)\n")
    while int(treatment) != correct:
        creaturesList[i].loseHealth()
        creaturesList[i].healthCheck()
        print("This treatment is not working. Your patient is getting worse..")
        treatment=input("What would you like to do now? (Select 1, 2, or 3)\n")
        while treatment.isdigit() == False or 1 > int(treatment) or int(treatment) > 3:
            treatment=input("\nWhat would you like to do now? (Select 1, 2, or 3)\n")
    if int(treatment) == correct:
        clear()
        creaturesList[i].cured()
        doctor.getMoney(creaturesList[i].money)
        debt="${:,.0f}".format(doctor.debt)
        print(f"Congratulations Doctor {doctor.name}! You're new student loan debt balance is {debt}.")
        doctor.debtCheck()
        del creaturesList[i]
        print("\nLet's see our next patient.")
        treatPatient()
  
intro()