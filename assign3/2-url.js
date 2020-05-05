// Enter your code here

function url_parsing(){
    var url = document.getElementById("comments").value;

    document.write(url);
}

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
