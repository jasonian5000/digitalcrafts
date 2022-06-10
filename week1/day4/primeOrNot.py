def primeCheck():
    num = int(input("What number do you want to check? "))
    for i in range(2, int(num/2)):
        if num % i == 0 or num <= 1:
            print("Not so prime...")
            break    
        print("It's prime!")
        break
primeCheck()