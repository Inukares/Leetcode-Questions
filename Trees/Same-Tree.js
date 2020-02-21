/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if(root === null) return 0;
    let left = root.left;
    let right = root.right;
    let leftVisit = visit(left, 1);
    let rightVisit = visit(right, 1)
    return Math.max(leftVisit, rightVisit)
  
};

const visit = (treeNode, depth) => {
    if(!treeNode) return depth;

    let left = treeNode.left;
    let right = treeNode.right;
    return Math.max(visit(left, depth+1), visit(right, depth+1))
    
}
