// Enter your code here

function submitted_results(event) {

    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var selection = document.getElementById("registration");
    var text= selection.options[selection.selectedIndex].text;

    var class_section = " ";
    if (document.getElementById('class1').checked) {
        class_section = "undergrad";
      }
    else if (document.getElementById('class2').checked) {
        class_section = "grad";
    }

    var checkboxes = document.getElementsByName('course');
    var selected = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    var anything_else = document.getElementById('anythingelse').value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Registration Status: " + text);
    console.log("Class Section: " + class_section);
    console.log("Courses: " + selected + " ");
    console.log("Class Goals: " + anything_else);
}