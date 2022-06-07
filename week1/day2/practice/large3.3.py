import random
print("I am thinking of a number between 1 and 10.")
answer = random.randint(1,10)
guess = 0
while guess != answer:
    guess = int(input("What's the number? "))
    if guess > answer:
        print(f"{guess} is too high.")
    elif guess < answer:
        print(f"{guess} is too low.")
    else:
        print("Yes! You win!")
