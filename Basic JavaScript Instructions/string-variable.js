//create variables to hold the name and host text.
var username;
var message;
//assing value tothese variables.
username="Molly";
message="see our upcoming range";
//get the element with an id of name.
var elName= document.getElementById( 'name');
//replace the content of this element.
elName.textContent=username;
//get the element with an id of note.
var elNote=document.getElementById('note');
//replace the content of this element.
elNote.textContent=message;

