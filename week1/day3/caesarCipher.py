cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

for i in cipher:
    if i == " ":
        print(" ", end="")
    if ord(i)< ord("a")+13:
        print(chr(ord(i)+13), end="")
    else:
        print(chr(ord(i)-13), end="")