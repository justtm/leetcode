def getmaxchildstringlength(string):
    left, res = 0, 0
    dic = {}
    for right in range(len(string)):
        if dic.has_key(string[right]):
            left = dic[string[right]]  # max(dic[string[right]], left)
        dic[string[right]] = right + 1
        res = max(right - left + 1, res)
    return res


print(getmaxchildstringlength('abcdea1234'))
