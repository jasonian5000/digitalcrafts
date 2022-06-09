nums = [12, 3, 1 , 2, -6, 5, -8, 6]

def threeSum(nums, target):
    min = 0
    max = (len(nums)-1)
    results= []
    nums.sort()
    for i in range(min, max):
        target = - nums[i]
        run = nums[min] + nums[max]
        if run < target:
            min += 1
        if run > target:
            max -= 1
        if run == target:
            results.append([min, i, max])

    return results

print(threeSum(nums, 0))
print(nums)