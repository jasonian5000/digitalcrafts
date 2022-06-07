bill = float(input("Total bill amount? "))
service = input("Level of service? "
"(Enter good, fair, or bad: )")

def tipCalc(bill, service):
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
    print("Tip amount: " + "${:.2f}".format(round(tip)))
    print("Total amount: " + "${:.2f}".format(round(total)))

tipCalc(bill, service)