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
        flag = 0
        isHead = 1
        while l1 is not None or l2 is not None:
            item1 = 0
            item2 = 0
            if l1 is not None:
                item1 = l1.val
                l1 = l1.next
            if l2 is not None:
                item2 = l2.val
                l2 = l2.next
            item = item1 + item2 + flag
            if item >= 10:
                item = item % 10
                flag = 1
            else:
                flag = 0
            newNode = ListNode(item)
            if isHead:
                newList = newNode
                preNode = newNode
                isHead = 0
            if preNode != newNode:
                preNode.next = newNode
                preNode = newNode
        return newList


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
