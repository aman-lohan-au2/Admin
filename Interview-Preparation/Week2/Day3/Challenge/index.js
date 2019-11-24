class LinkedNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  const n4 = new LinkedNode(5);
  const n3 = new LinkedNode(3, n4);
  const n2 = new LinkedNode(7, n3);
  const n1 = new LinkedNode(7, n2);
  
  let n = n1;
  
  const rotate = (l, k) => {
    let p = l;
    const first = l;
    let last;
    let res;
    let i = 0;
    while(p) {
      i++;
      if (!p.next) { last = p; }
      p = p.next;
    }
    const size = i;
    if (!(k % size)) { return l; }
    const aim = size - (k % size) - 1;
    p = l;
    i = 0;
    while (p) {
      if (i++ === aim) {
        res = p.next;
        p.next = null;
        last.next = first;
        return res;
      }
      p = p.next;
    }
  };
  
  n = rotate(n, 0);
  while (n) {
    console.log(n.value);
    n = n.next;
  }