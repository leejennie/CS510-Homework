// Enter your code here

function separate(event) {

    event.preventDefault();

    var text = document.getElementById("userinput").value;
    
    var store = text.split(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g);
   
    var div = document.getElementById("results");

    for (var i = 0; i < store.length; i++) {
        var p = document.createElement('p');
        p.setAttribute('class', 'phrase');
        p.textContent = store[i];
        div.appendChild(p); 
    }
    
}
