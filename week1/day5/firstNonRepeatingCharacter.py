# Write a function that takes in a string of lowercase letters
# and returns the index of the string's first non-repeating character.
# If the input string does not have any non-repeating characters,
# your function should return -1.

string = "asfasfgr"

def nonRepeating(string):
    list1=[]
    list1[:0]=string
    m, n = 0, len(list1)
    for i in range(m, n):
        if list1[m] == list1[i] and m != i:
            m+=1
        if i == n-1:
            print(f"The first non-repeating character is {list1[m]} and is found at index {m}")
            break

nonRepeating(string)