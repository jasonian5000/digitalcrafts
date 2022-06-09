nums = [2, 7, 11, 15]

def twoSum(nums, target):
    m = 0
    n = (len(nums)-1)
    for i in range(m, n):
        run = nums[m] + nums[n]
        if run > target:
            n -= 1
        if run < target:
            m += 1
        if run == target:
            return [m, n]
    return []

print(twoSum(nums, 26))