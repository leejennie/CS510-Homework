// Enter your code here

function check(event) {

    event.preventDefault();

    var input = document.getElementById("number").value;
    var div = document.getElementById("result");

    var reverse = input.split('').reverse().join('');

    if (reverse == input) {
        var p = document.createElement('p');
        p.textContent = input + " is a palindrome"; 
        div.appendChild(p);
    }
    else {
        var p = document.createElement('p');
        p.textContent = input + " is not a palindrome"; 
        div.appendChild(p);
    }
}