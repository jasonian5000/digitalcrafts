array = [5, 1, 4, 2]

def products(array):
    arrayNest = [array for i in range(len(array))]
    print(arrayNest)
    # for j in range(len(arrayNest)):
    #     arrayNest[j][j]=1
    # print(arrayNest)
    totalList=[]
    total=1
    for k in range(len(arrayNest)):
        total*=arrayNest[k][k]
        totalList.append(total)
    print(arrayNest)

        
products(array)
        