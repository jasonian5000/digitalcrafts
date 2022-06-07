print("I am thinking of a number between 1 and 10.")
answer = 5
guess = 0
while guess != answer:
    guess = int(input("What's the number? "))
    print("Nope, try again.")

print("Yes! You win!")
