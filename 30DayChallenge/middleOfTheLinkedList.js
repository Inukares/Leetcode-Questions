/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    let lo = head, hi = head;
    while (hi && hi.next) {
        lo = lo.next;
        hi = hi.next.next;
    }
    return lo;
};
