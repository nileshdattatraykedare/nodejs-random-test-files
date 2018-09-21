

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function calculate(A, S) {
for(var i=0; i < A.length; i++){
    var distancebetweenwalls = A[i]-S[i]-1
    console.log(distancebetweenwalls * Math.min(S[i], A[i]))
}
}

process.stdin.on('end', function () {
     input_ = input_.replace(/\n$/, "");
     
    input_ = input_.split("\n");
   
    var T = parseInt(input_[0], 10);
    
    var A_arr = [];
    var A_Size = [];
    for(var t_i=0; t_i<T; t_i++) {
        var A_size = parseInt(input_.shift(), 10);
        A_Size.push(A_size);
        var A = input_.shift().split(' ').map(function(el) {
        	return parseInt(el, 10);});
        A_arr.push(A);
        
        
    }
    var res = calculate(A_arr, A_Size);
    //process.stdout.write(out_);

    process.exit();

});
