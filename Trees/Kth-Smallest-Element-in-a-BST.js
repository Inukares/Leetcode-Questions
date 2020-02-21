/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root) return null
    const sortedTree = sort(root, []);
    return sortedTree[k-1]
    
};

const sort = (root, traversal) => {
    if(root) {
        sort(root.left, traversal)
        traversal.push(root.val)
        sort(root.right, traversal)
    }
    return traversal;
}

// algorithm: take left element, root, right and you have sorted
// 
// 3,5,6
// |2|3|4|,5,6 -> // 2,3,4,5,6
// |1|,2,3,4,5,6 -> 1,2,3,4,5,6


// 1|2|,3,4, -> 
