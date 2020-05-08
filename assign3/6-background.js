// Enter your code here
 
function bgcolor() {

    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var a = Math.random();
    
    var bgColor = "rgba(" + r + "," + b + "," + g + "," + a + ")";
    
    document.body.style.backgroundColor = bgColor;
}

var t = setInterval(bgcolor,3000); 

function stopstart(event) {

    event.preventDefault();

    if(document.getElementById("Submit").value=="Start") {
        document.getElementById("Submit").value="Stop";
        document.getElementById("Submit").className="btn btn-danger";
        
        var original_time = 3;
        var new_time = document.getElementById("interval").value;

        if(new_time != original_time) {
            t = setInterval(bgcolor,(new_time * 1000));
        }
        else {
            t = setInterval(bgcolor,3000); 
        }
    }
     
    else if(document.getElementById("Submit").value=="Stop") {
        document.getElementById("Submit").value="Start";
        document.getElementById("Submit").className="btn btn-primary";
        clearInterval(t);
    } 
    
}

