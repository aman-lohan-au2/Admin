var obj = {
    x: 71,
    getX: function() {
      return this.x;
    }
  };
  
  console.log(obj.getX.bind(obj)());
  console.log(obj.getX.call(obj));
  console.log(obj.getX.apply(obj));