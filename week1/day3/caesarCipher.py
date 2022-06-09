cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

def cipherSolver(cipher):
    for i in cipher:
        if i == " ":
            print(" ", end="")
        elif ord(i)< ord("a")+13:
            print(chr(ord(i)+13), end="")
        else:
            print(chr(ord(i)-13), end="")

    return ""

print(cipherSolver(cipher))