'''
19 is a happy number.

Explanation:

1^{2} + 9^{2} = 82

8^{2} + 2^{2} = 68

6^{2} + 8^{2} = 100

1^{2} + 0^{2} + 0^{2} = 1
'''
l = [1, 65, 28, 23, 60, 31]
s = 0
while s!=1:
    x = '19'
    s = 0
    for i in x:
        s+=int(i)^2
    x = str(s)
print("Happy number")
