import random

list1 = []
for i in range(0,10):
    n = random.randint(-100,100)
    list1.append(n)

print(list1)

#1. Sum the Numbers
#Create a list of numbers, print their sum.

print(sum(list1))

#2. Largest Number
#Create a list of numbers, print the largest of the numbers.

list1.sort()
print(list1[-1])

#3. Smallest Number
#Create a list of numbers, print the smallest of the numbers.

list1.sort()
print(list1[0])

#4. Even Numbers
#Create a list of numbers, print each number in the list that is even.

for i in list1:
    if i % 2 == 0:
        print(i, end=", ")
print()

#5. Positive Numbers
#Create a list of numbers, print each number in the list that is greater than zero.

for i in list1:
    if i >= 0:
        print(i, end=", ")
print()
    
#6. Positive Numbers II
#Create a list of numbers, create a new list which contains every number in the given list which is positive.

list3 = []
for i in list1:
    if i > 0:
        list3.append(i)
print(list3)

#7. Multiply a list
#Create a list of numbers, and a single factor (also a number), create a new list consisting of each of the numbers in the first list multiplied by the factor. Print this list.

factor = random.randint(1,100)
list4 = []
for i in list1:
    list4.append(i*factor)
print(list4)

#8. Reverse a String
#Given a string, print the string reversed.

string = "This is a string"
print(string[::-1])