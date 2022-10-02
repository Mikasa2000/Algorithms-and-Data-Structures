/**
 * 1. 先序遍历：根左右
 * 2. 中序遍历：左根右
 * 3. 后序遍历
 *
 *
 * */

function BST() {

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    // 属性root
    this.root = null;


    BST.prototype.insert = function(key) {
        let newNode = new Node(key);
        if(this.root == null) {
            this.root = newNode;
        }else{
            this.exec(this.root, newNode);
        }


    }

    BST.prototype.exec = function(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.exec(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.exec(node.right, newNode);
            }
        }
    }

    // 前序遍历(递归)
    BST.prototype.preOrder = function(handler) {
        this.preOrderNode(this.root, handler);

    }

    BST.prototype.preOrderNode = function(node, handler) {

        if(node != null) {
            // 1. 处理经过的节点
            handler(node.key);
            // 2. 处理经过的左子节点
            this.preOrderNode(node.left, handler);
            // 3. 处理经过的右子节点
            this.preOrderNode(node.right, handler);
        }
    }

    // 中序遍历
    BST.prototype.inOrder = function(handler) {
        this.inOrderNode(this.root, handler);
    }

    BST.prototype.inOrderNode = function(node, handler) {
        if(node !== null) {
            this.inOrderNode(node.left, handler);
            handler(node.key);
            this.inOrderNode(node.right, handler);
        }
    }

}

let bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(18);
bst.insert(9)

console.log(bst)

// 测试先序遍历
let resultStr = '';
bst.inOrder(function(key) {
    resultStr += key + " ";
})

// bst.preOrder(function(key) {
//     resultStr += key + " "
// })

console.log(resultStr);

