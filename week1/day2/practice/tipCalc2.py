bill = float(input("Total bill amount? "))
service = input("Level of service? "
"(Enter good, fair, or bad: )")
numberOfPeople = int(input("Split how many ways? "))

def tipCalc(bill, service, numberOfPeople):
    if service == 'good':
        tipPercentage = .20
    elif service == 'fair':
        tipPercentage = .15
    elif service == 'bad':
        tipPercentage = .10
    else:
        print("Invalid input")
        quit()
    tip = bill*tipPercentage
    total = bill+(bill*tipPercentage)
    split = total/numberOfPeople
    print("Tip amount: " + "${:.2f}".format(round(tip)))
    print("Total amount: " + "${:.2f}".format(round(total)))
    print("Amount per person: " + "${:.2f}".format(round(split)))

tipCalc(bill, service, numberOfPeople)