/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 //https://leetcode.com/problems/minimum-depth-of-binary-tree/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    this.minDepth = null;
    
    this.iterate = (node, height) => {
        if(height >= minDepth) return;
        
        if(!node.left && !node.right) {
            if(this.minDepth === null) {
                this.minDepth = height;
            } else {
                 this.minDepth = Math.min(this.minDepth, height);
            }
            return;
        }
        
        if(node.left) {
            this.iterate(node.left, height + 1);
        }
        
        if(node.right) {
            this.iterate(node.right, height + 1);
        }
    }
    
    if(!root) return 0;
    this.iterate(root, 1);
    
    return this.minDepth;
};


