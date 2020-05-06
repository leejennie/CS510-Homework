// Enter your code here

function url_parsing(){
    
    //CODE TO PARSE STRING
    event.preventDefault(event);
    
    var url_input = document.getElementById("comments").value;

    var url = new URL(url_input)

    var url_obj = new URL(url);
    var searchquery = new URLSearchParams(url.search);
    
    var origin = url_obj.origin; 
    var name = searchquery.get('name'); 
    var email = searchquery.get('email'); 
    var human = searchquery.get('human');


    //CODE TO DYNAMICALL ADD THE HTML ELEMENTS
    var div_body = document.createElement('div');
    div_body.setAttribute('class', 'results');

    var form = document.createElement('form') // created form class 
    form.setAttribute("class", "bg-light border rounded w-50 mx-auto mt-5 p-3"); //set sttributes to that of the form above
    div_body.appendChild(form);
    
    //create heading class like that above 
    var h2 = document.createElement('h2'); 
    h2.setAttribute('class', 'mt-2 mb-4');
    h2.textContent = "Results";
    //set the header information in the form section
    form.appendChild(h2);
        
    //create div class
    var div = document.createElement('div');
    div.setAttribute('class', 'form-body');
    form.appendChild(div);

    //create first label 
    var h5_1 = document.createElement('h5');
    h5_1.setAttribute('class', 'url-title');
    h5_1.textContent = "URL";
    //add header below the div class 
    div.appendChild(h5_1);
    
    var p1 = document.createElement('p');
    p1.textContent = origin; 
    //add p1 below the url title header in the div 
    div.appendChild(p1);
    
    //create second label 
    var h5_2 = document.createElement('h5');
    h5_2.setAttribute('class', 'query-title');
    h5_2.textContent = "Query Parameters";
    //add header below the div class 
    div.appendChild(h5_2);
    
    var p2 = document.createElement('p');
    p2.textContent = "Name: " + name; 
    //add p2 below the url title header in the div 
    div.appendChild(p2);
    
    var p3 = document.createElement('p');
    p3.textContent = "Email: " + email; 
    //add p3 below the url title header in the div 
    div.appendChild(p3);
    
    var p4 = document.createElement('p');
    p4.textContent = "Human: " + human; 
    //add p3 below the url title header in the div 
    div.appendChild(p4);
    
    //display the whole form 
    document.body.appendChild(div_body);
}



// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
