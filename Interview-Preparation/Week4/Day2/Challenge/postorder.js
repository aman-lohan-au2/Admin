function post_order(root, nodes) {
    if (root && root.left) {
        post_order(root.left, nodes);   
    }
    if (root && root.right) {
        post_order(root.right, nodes);  
    }
    nodes.push(root.data);
    return nodes;
}

post_order(root, []); 