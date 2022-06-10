from re import I


def factorial():
    total = 1
    num = int(input("What number would you like to factorialize? "))
    for i in range(1, num+1):
        total *= i
    print(total)

factorial()