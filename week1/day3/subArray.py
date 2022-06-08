array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

def isValidSubsequence(array, sequence):
    m = 0
    n = 0
    check = 0
    for i in range(m, len(array)):
        for j in range(n, len(sequence)):
            if array[i] == sequence[j] and check == j:
                m = i
                n = j
                check += 1

    
    return n+1 == len(sequence) and check == len(sequence)

print(isValidSubsequence(array, sequence))