# -*- coding: utf-8 -*-
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        re = ListNode(0)
        r = re
        carry = 0
        while l1 or l2:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            s = x + y + carry
            carry = s / 10
            r.next = ListNode(s%10)
            r = r.next
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
        if carry != 0:
            r.next = ListNode(1)
        return re.next

node1 = ListNode(2)
node2 = ListNode(4)
node3 = ListNode(3)
node33 = ListNode(9)

node1.next = node2
node2.next = node3
node3.next = node33

node4 = ListNode(5)
node5 = ListNode(6)
node6 = ListNode(4)
node4.next = node5
node5.next = node6
ss = Solution()
ss.addTwoNumbers(node1, node4)

# 考虑 [5] + [5] =====>> [0]-<[1] 的情况