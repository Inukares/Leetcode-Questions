/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    return BST(root, [], 0)
};

const BST = (root, traversal, level) => {
    if(root) {
        if(traversal[level] && Array.isArray(traversal[level])) {
            traversal[level].push(root.val)        
        } else {
            traversal.push([root.val])
        }
        level++; 
        let leftTraversal = BST(root.left, traversal, level)
        BST(root.right, leftTraversal, level)
    }
    return traversal
} 


