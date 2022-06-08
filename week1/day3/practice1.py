numbers = [1, 2, 3, 4, 5, 6, 7]
squares=[]
for i in numbers:
    squares.append(i**2)

list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
for i in list1:
    if i == "":
        list1.remove(i)

list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]

list2[2][2].append(7000)


list3 = [5, 10, 15, 20, 25, 50, 20]

for i in range(len(list3)):
    if list3[i] == 20:
        list3[i] = 200

list4 = [5, 20, 15, 20, 25, 50, 20]

for i in list4:
    if i == 20:
        list4.remove(i)
