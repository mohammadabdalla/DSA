class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }

    inOrderTraversal() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    _inOrderTraversal(node, result) {
        if (node !== null) {
            this._inOrderTraversal(node.left, result);
            result.push(node.value);
            this._inOrderTraversal(node.right, result);
        }
    }

    preOrderTraversal() {
        const result = [];
        this._preOrderTraversal(this.root, result);
        return result;
    }

    _preOrderTraversal(node, result) {
        if (node !== null) {
            result.push(node.value);
            this._preOrderTraversal(node.left, result);
            this._preOrderTraversal(node.right, result);
        }
    }

    postOrderTraversal() {
        const result = [];
        this._postOrderTraversal(this.root, result);
        return result;
    }

    _postOrderTraversal(node, result) {
        if (node !== null) {
            this._postOrderTraversal(node.left, result);
            this._postOrderTraversal(node.right, result);
            result.push(node.value);
        }
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log('In-order Traversal:', tree.inOrderTraversal()); // [2, 3, 4, 5, 6, 7, 8]
console.log('Pre-order Traversal:', tree.preOrderTraversal()); // [5, 3, 2, 4, 7, 6, 8]
console.log('Post-order Traversal:', tree.postOrderTraversal()); // [2, 4, 3, 6, 8, 7, 5]
console.log('Search 4:', tree.search(4)); // true
console.log('Search 10:', tree.search(10)); // false



