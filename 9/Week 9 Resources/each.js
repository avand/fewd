// Interface
var $ = {
  each: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(i, array[i])
    }
  }
};

// Implementation
var colors = ["red", "green", "blue"]
$.each(colors, function(i, color) {
  console.log(i, color);
})

// Output
0, "red"
1, "green"
2, "blue"
