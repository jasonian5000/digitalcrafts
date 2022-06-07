import random
print("I am thinking of a number between 1 and 10.")
answer = random.randint(1,10)
guess = 0
counter = 0
guessLimit = 5
while guess != answer and counter != guessLimit:
    counter += 1
    guess = int(input("What's the number? "))
    if counter == 5:
        print("You ran out of guesses!")
    elif guess > answer:
        print(f"{guess} is too high.")
        print(f"You have {guessLimit - counter} guesses left.")
    elif guess < answer:
        print(f"{guess} is too low.")
        print(f"You have {guessLimit - counter} guesses left.")
    else:
        print("Yes! You win!")