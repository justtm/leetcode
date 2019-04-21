def findIndex(nums, target):
    data = {}
    for i in range(len(nums)):
        item1 = nums[i]
        item2 = target - item1
        if data.has_key(item2):
            return [data[item2], i]
        data[item1] = i


print(findIndex([1, 2, 3, 3], 6))
print(findIndex([1, 2, 3, 4], 4))
