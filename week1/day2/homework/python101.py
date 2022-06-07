import random

def coinFlip():
    print("You flipped a coin!")
    side = random.randint(1,2)
    if side == 1:
        print("It is heads!")
    else:
        print("It is tails!")

def evenOdd():
    num = int(input("Enter a number: "))
    if num % 2 == 0:
        print("It's even!")
    else:
        print("It's odd!")

def diceRoller():
    print("Let's roll a dice!")
    sides = int(input("How many sides should it have? (2-20): "))
    print("It's rolling...")
    print(f"It's a {random.randint(1,sides)}")
