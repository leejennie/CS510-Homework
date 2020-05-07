// Enter your code here

//citation here: based on the code from https://www.tutsmake.com/highlight-search-result-vanilla-javascript/

function highlight() {

    var input = document.getElementById("input").value;
    var intro = document.getElementById("intro").innerHTML;

    var search = new RegExp("(" + input + ")", "gim");


    var new_intro = intro.replace(/(<span>|<\/span>)/igm, "");
   
    document.getElementById("intro").innerHTML = new_intro;
    
    //tested it out with <mark></mark> but didn't look as good since the yellow was not bright 
    var highlight_word = new_intro.replace(search, "<span style='background-color:yellow'>\$&</span>");
   
    document.getElementById("intro").innerHTML = highlight_word;
}

