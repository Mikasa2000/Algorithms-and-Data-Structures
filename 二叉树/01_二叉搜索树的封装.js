function BST() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
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
        if(node.key > newNode.key) {
            if(node.left == null) {
                node.left = newNode;
            }else{
                this.exec(node.left, newNode);
            }
        }else {
            if(node.right == null) {
                node.right = newNode;
            }else {
                this.exec(node.right, newNode);
            }
        }
    }



}

let bst = new BST();
bst.insert(9);
bst.insert(20);
bst.insert(3);
bst.insert(11);

console.log(bst);

// 1. 前序遍历
function preOrder(root) {
    let arr = [];
    function exec(root) {
        if(root != null) {
            arr.push(root.key);
            exec(root.left);
            exec(root.right);
        }
    }

    exec(root);
    return arr;
}

console.log(preOrder(bst.root));

// 2. 中序遍历
function inOrder(root) {
    let arr = [];
    function exec(root) {
        if(root !== null) {
            exec(root.left);
            arr.push(root.key);
            exec(root.right);
        }
    }
    exec(root);
    return arr;
}

console.log(inOrder(bst.root));

// 3.后序遍历
function afterOrder(root) {
    let arr = [];
    function exec(root) {
        
    }
}
