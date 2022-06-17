array = [5, 1, 4, 2]

def products(array):
    multiplied=[]
    bigTotal=1
    for i in array:
        bigTotal *= i
    for j in array:
        multiplied.append(bigTotal//j)
    print(multiplied)

products(array)
        