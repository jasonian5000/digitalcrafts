def palindrome():
    word = input("What word do you want to check? ")
    rword = ''
    for i in word:
        rword = i + rword
    if word.lower() == rword.lower():
        print("This is a palindrome!")
    else:
        print("This is not a palindrome...")

palindrome()