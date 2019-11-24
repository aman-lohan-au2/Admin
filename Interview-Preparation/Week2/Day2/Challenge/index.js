var n1 = "123"
var n2 = "456"

var multiply = function(str1, str2) {
  var sum = 0, k = 1;
  for( var i = str1.length - 1; i>=0; i--){
      var val1 = parseInt(str1[i], 10) * k;

      k *= 10;
      var d = 1;
      for(var j = str2.length - 1; j >=0; j--){
          var val2 = parseInt(str2[j], 10) * d;
          d *= 10;

          sum +=  val1 * val2;

      }
  }
  return sum.toString();
};

console.log(multiply(n1,n2))