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

// 搜索某一个key(循环)
BST.prototype.searchKey = function(key) {
    // 1. 搜索根节点
    let node = this.root;
    // 2. 循环搜索key(当node不是空时)
    while (node !== null) {
        if(key < node.key) {
            node = node.left;
        }else if(key > node.key) {
            node = node.right;
        }else {
            return true;
        }
    }
    return false;
}

BST.prototype.searchKey2 = function(key) {
    return this.exec(this.root, key);
}

BST.prototype.exec = function(node, key) {
    if(node == null) {
        return false;
    }

    if(node.key > key) { // 传入的key较小，向左边查找
        return this.exec(node.left, key);
    }else if(node.key < key) { // 传入的key较大时，向右查找
        return this.exec(node.right, key);
    }else {
        return true;
    }
}