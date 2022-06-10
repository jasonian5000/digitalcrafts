
red = [1, 2, 1, 9, 12, 3]
blue = [3, 3, 4, 6, 1, 2]
fastest = False


def speedFinder(red, blue, fastest):
    red.sort()
    blue.sort()
    combined = []
    if fastest == True:
        blue.reverse()
    for i in range(len(red)):
        if red[i] > blue[i]:
            combined.append(red[i])
        if blue[i] > red[i]:
            combined.append(blue[i])
        if blue[i] == red[i]:
            combined.append(blue[i])

    return sum(combined)

print(speedFinder(red, blue, fastest))

