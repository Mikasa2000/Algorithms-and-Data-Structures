function BST() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.root = null;

}

BST.prototype.insert = function(key) {
    let newNode = new Node(key);
    if(this.root == null) {
        this.root = newNode;
    }else {
        this.exec(this.root, newNode);
    }
}

BST.prototype.exec = function(node, newNode) {
    if(node.key > newNode) {
        if(node.left == null) {
            node.left = newNode
        }else {
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


BST.prototype.min = function() {
    let node = this.root;
    while (node.left !== null) {
        node = node.left;
    }
    return node.key;
}

BST.prototype.max = function() {
    let node = this.root;
    while(node.right !== null) {
        node = node.right;
    }
    return node.key;
}