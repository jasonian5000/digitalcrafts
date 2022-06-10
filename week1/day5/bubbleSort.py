list = [8,5,2,9,5,6,3]

def sorter(list):
    max = len(list)-1
    for j in range(max):
        for i in range(max):
            if list[i+1] < list[i]:
                list[i], list[i+1], = list[i+1], list[i]
        max -= 1
    return list
        
print(sorter(list))