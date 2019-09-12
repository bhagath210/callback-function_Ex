function callback(x,y){ // callback function defination
    console.log("x---->", x);
    console.log("y---->", y);
    if(typeof y =="function"){ // method for checking whether y is function or not
        var firstResponse = 40;
        y(firstResponse); // here y is invoked immediately without any delay

        setTimeout(function(){ // function for making time delay
            console.log('called after 100msec');
            var secondResponse = 20;
            y(secondResponse); // here y is invoked with some delay i.e 100 msec
        }, 100);  
    }
    return 10;
}

var result = callback("Hai", function(a){ // calling the callback function
    console.log('callback....', a)
});

console.log(result);