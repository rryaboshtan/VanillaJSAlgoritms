class BinaryTree {
   constructor() {
      this.root = null;
   }
   add(value) {
      if (!this.root) {
         this.root = new TreeNode(value);
      } else {
         let node = this.root;
         let newNode = new TreeNode(value);

         while (node) {
            if (value > node.value) {
               if (!node.right) {
                  node.right = newNode;
                  break;
               }
               node = node.right;
            } else {
               if (!node.left) {
                  node.left = newNode;
                  break;
               }
               node = node.left;
            }
         }
      }
   }

   print(root = this.root) {
      if (!root) {
         return;
      }
      console.log(root.value);
      this.print(root.left);
      this.print(root.right);
   }
}

class TreeNode {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(6);
tree.add(5);
tree.add(2);
tree.add(1);
tree.print();
