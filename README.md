# nodejs-random-test-files

<code>

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";
var out_ = "";
process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function calculate(A) {
var a = A;
var water = 0;
a.forEach(function(key, i){
    //$.each(a, function (key, i) {
  if (i > a[key + 1]) { //if next tower to right is bigger
      for (j = 1; j <= a.length - key; j++) { //number of remaining towers to the right
          if (a[key+1 + j] >= i) { //if any tower to the right is bigger
              for (k = 1; k < 1+j; k++) {
              //add to water: the difference of the first tower and each tower between the first tower and its bigger tower
                  water += a[key] - a[key+k];
              }
          }
      }
  }
});
out_ = water;
//console.log("Water: "+water);

}

process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");
    var T = parseInt(input_[0], 10);
    var A_arr = [];
    for(var t_i=0; t_i<T; t_i++) {
        var A_size = parseInt(input_.shift(), 10);
        var A = input_.shift().split(' ').map(function(el) {
        	return parseInt(el, 10);});
        A_arr.push(A);
        
    }
    var res = calculate(A);
    process.stdout.write(out_);

    process.exit();

});

<code>
